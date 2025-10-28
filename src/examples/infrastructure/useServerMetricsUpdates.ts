import { useEffect, RefObject } from "react";
import { TableRefType, Row } from "simple-table-core";

// Configuration for server metrics updates
const UPDATE_CONFIG = {
  // Random interval range in milliseconds
  minInterval: 500, // Minimum time between updates
  maxInterval: 1500, // Maximum time between updates

  // What percentage of servers to update each time
  minServersPercent: 0.5, // 50%
  maxServersPercent: 0.7, // 70%
};

export function useServerMetricsUpdates(tableRef: RefObject<TableRefType>, data: Row[]) {
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let isActive = true;

    const scheduleNextUpdate = () => {
      if (!isActive) return;

      // Random interval based on configuration
      const intervalRange = UPDATE_CONFIG.maxInterval - UPDATE_CONFIG.minInterval;
      const nextInterval = Math.random() * intervalRange + UPDATE_CONFIG.minInterval;

      timeoutId = setTimeout(() => {
        if (!isActive || !tableRef.current) return;

        // Get current visible rows for this update cycle
        const visibleRows = tableRef.current.getVisibleRows();

        if (visibleRows.length === 0) {
          scheduleNextUpdate();
          return;
        }

        // Select percentage of visible servers to update based on configuration
        const totalVisibleServers = visibleRows.length;
        const serversPercent =
          UPDATE_CONFIG.minServersPercent +
          Math.random() * (UPDATE_CONFIG.maxServersPercent - UPDATE_CONFIG.minServersPercent);
        const serversToUpdate = Math.floor(totalVisibleServers * serversPercent);

        // Randomly select which visible servers to update
        const indicesToUpdate = [];
        const usedIndices = new Set();

        for (let i = 0; i < serversToUpdate; i++) {
          let randomIndex;
          do {
            randomIndex = Math.floor(Math.random() * totalVisibleServers);
          } while (usedIndices.has(randomIndex));

          usedIndices.add(randomIndex);
          indicesToUpdate.push(randomIndex);
        }

        // Update selected servers with realistic metric changes
        indicesToUpdate.forEach((visibleIndex) => {
          // Get fresh visible rows for each update to handle scrolling
          const currentVisibleRows = tableRef.current?.getVisibleRows();
          if (!currentVisibleRows || visibleIndex >= currentVisibleRows.length) {
            return;
          }

          const visibleRow = currentVisibleRows[visibleIndex];
          const server = visibleRow.row;

          // Find the actual index in the data array using the server id
          const actualRowIndex = data.findIndex((row) => row.id === server.id);
          if (actualRowIndex === -1) {
            return;
          }

          // Update CPU usage (small fluctuations)
          const currentCpu = server.cpuUsage as number;
          if (typeof currentCpu === "number") {
            const cpuChange = (Math.random() - 0.5) * 8; // -4% to +4%
            const newCpu = Math.min(100, Math.max(0, currentCpu + cpuChange));

            tableRef.current?.updateData({
              accessor: "cpuUsage",
              rowIndex: actualRowIndex,
              newValue: Math.round(newCpu * 10) / 10,
            });
          }

          // Update Memory usage (slower changes)
          if (Math.random() < 0.4) {
            // Only 40% of the time
            const currentMemory = server.memoryUsage as number;
            if (typeof currentMemory === "number") {
              const memoryChange = (Math.random() - 0.5) * 5; // -2.5% to +2.5%
              const newMemory = Math.min(100, Math.max(0, currentMemory + memoryChange));

              tableRef.current?.updateData({
                accessor: "memoryUsage",
                rowIndex: actualRowIndex,
                newValue: Math.round(newMemory * 10) / 10,
              });
            }
          }

          // Update Network traffic
          if (Math.random() < 0.6) {
            // 60% of the time
            const currentNetIn = server.networkIn as number;
            if (typeof currentNetIn === "number") {
              const netChange = (Math.random() - 0.5) * 100; // Varies more
              const newNetIn = Math.max(0, currentNetIn + netChange);

              tableRef.current?.updateData({
                accessor: "networkIn",
                rowIndex: actualRowIndex,
                newValue: Math.round(newNetIn * 100) / 100,
              });
            }

            const currentNetOut = server.networkOut as number;
            if (typeof currentNetOut === "number") {
              const netChange = (Math.random() - 0.5) * 60;
              const newNetOut = Math.max(0, currentNetOut + netChange);

              tableRef.current?.updateData({
                accessor: "networkOut",
                rowIndex: actualRowIndex,
                newValue: Math.round(newNetOut * 100) / 100,
              });
            }
          }

          // Update response time (varies significantly)
          if (Math.random() < 0.5) {
            const currentResponseTime = server.responseTime as number;
            if (typeof currentResponseTime === "number") {
              const responseChange = (Math.random() - 0.5) * 100;
              const newResponseTime = Math.max(10, currentResponseTime + responseChange);

              tableRef.current?.updateData({
                accessor: "responseTime",
                rowIndex: actualRowIndex,
                newValue: Math.round(newResponseTime * 10) / 10,
              });
            }
          }

          // Update active connections
          if (Math.random() < 0.5) {
            const currentConnections = server.activeConnections as number;
            if (typeof currentConnections === "number") {
              const connectionChange = Math.floor((Math.random() - 0.5) * 500);
              const newConnections = Math.max(0, currentConnections + connectionChange);

              tableRef.current?.updateData({
                accessor: "activeConnections",
                rowIndex: actualRowIndex,
                newValue: newConnections,
              });
            }
          }

          // Update requests per second
          if (Math.random() < 0.5) {
            const currentRequests = server.requestsPerSec as number;
            if (typeof currentRequests === "number") {
              const requestChange = Math.floor((Math.random() - 0.5) * 2000);
              const newRequests = Math.max(0, currentRequests + requestChange);

              tableRef.current?.updateData({
                accessor: "requestsPerSec",
                rowIndex: actualRowIndex,
                newValue: newRequests,
              });
            }
          }
        });

        // Schedule the next update
        scheduleNextUpdate();
      }, nextInterval);
    };

    // Start the first update
    scheduleNextUpdate();

    // Cleanup function
    return () => {
      isActive = false;
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [tableRef, data]);
}
