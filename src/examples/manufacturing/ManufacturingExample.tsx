import { Row, SimpleTable, Theme } from "simple-table-core";
import { HEADERS } from "./manufacturing-headers";
import "simple-table-core/styles.css";
import { useState, useEffect } from "react";

const BACKUP_MANUFACTURING_DATA = [
  {
    id: "A1-0",
    productLine: "Assembly Line A",
    stations: [
      {
        id: "A1-S1-0",
        productLine: "Assembly Line A",
        station: "Station 1",
        machineType: "Packaging",
        operator: "Team Alpha",
        productType: "Unit Beta",
        outputRate: 554,
        cycletime: 93.79,
        efficiency: 88,
        defectRate: 3.63,
        defectCount: 20,
        downtime: 0.57,
        utilization: 75,
        energy: 698,
        status: "Unplanned Downtime",
        maintenanceDate: "2025-10-16",
        cycleTimeData:
          "[54.90890103919923,61.989577471827246,98.06570304430862,128.2906017181844,102.5932217838931,92.28632611031614,115.97162792475456,107.89714234796583,68.1360730308173,107.76558116700552]",
      },
      {
        id: "A1-S2-0",
        productLine: "Assembly Line A",
        station: "Station 2",
        machineType: "Quality Scanner",
        operator: "Team Alpha",
        productType: "Part Alpha",
        outputRate: 581,
        cycletime: 96.28,
        efficiency: 66,
        defectRate: 4.57,
        defectCount: 26,
        downtime: 1.3,
        utilization: 79,
        energy: 661,
        status: "Running",
        maintenanceDate: "2025-10-29",
        cycleTimeData:
          "[90.6619809423726,92.28447411325854,133.8319280526125,126.80802932067058,102.08395232499139,77.04260371680292,60.889766903675515,72.20116136886368,149.64499306555675,57.38864937608028]",
      },
      {
        id: "A1-S3-0",
        productLine: "Assembly Line A",
        station: "Station 3",
        machineType: "Robot Arm",
        operator: "Team Zeta",
        productType: "Module Z",
        outputRate: 606,
        cycletime: 94,
        efficiency: 65,
        defectRate: 4.01,
        defectCount: 24,
        downtime: 3.4,
        utilization: 74,
        energy: 814,
        status: "Running",
        maintenanceDate: "2025-11-03",
        cycleTimeData:
          "[111.35465186282781,130.43467407043568,121.73414115592249,83.59321577984218,69.29697781925984,124.5434981911217,76.31034613156976,57.64670288722664,68.56915351249515,96.56435601325035]",
      },
      {
        id: "A1-S4-0",
        productLine: "Assembly Line A",
        station: "Station 4",
        machineType: "Circuit Printer",
        operator: "Team Epsilon",
        productType: "Unit Beta",
        outputRate: 497,
        cycletime: 99.5,
        efficiency: 75,
        defectRate: 4.79,
        defectCount: 23,
        downtime: 0.25,
        utilization: 77,
        energy: 605,
        status: "Running",
        maintenanceDate: "2025-11-11",
        cycleTimeData:
          "[70.0713087369478,50.32065715117477,120.23389937816044,74.5603985040183,130.9994609226252,53.29594583969779,111.00286669124864,128.3690972612731,134.88691514257414,121.21529167619242]",
      },
      {
        id: "A1-S5-0",
        productLine: "Assembly Line A",
        station: "Station 5",
        machineType: "Robot Arm",
        operator: "Team Epsilon",
        productType: "System Gamma",
        outputRate: 319,
        cycletime: 108.61,
        efficiency: 76,
        defectRate: 4.36,
        defectCount: 13,
        downtime: 0.7,
        utilization: 88,
        energy: 1256,
        status: "Unplanned Downtime",
        maintenanceDate: "2025-11-08",
        cycleTimeData:
          "[96.70923453307586,113.3740771795103,139.59223259967672,95.34648896398774,65.19480606861366,122.60216377561879,123.29410484978015,106.09635775431738,118.31160312756477,105.60446601068625]",
      },
      {
        id: "A1-S6-0",
        productLine: "Assembly Line A",
        station: "Station 6",
        machineType: "Robot Arm",
        operator: "Team Zeta",
        productType: "Widget Y",
        outputRate: 454,
        cycletime: 120.5,
        efficiency: 66,
        defectRate: 4.34,
        defectCount: 19,
        downtime: 3.39,
        utilization: 91,
        energy: 571,
        status: "Running",
        maintenanceDate: "2025-10-22",
        cycleTimeData:
          "[147.26860812312367,138.47033499542698,109.80891596524158,111.30511647050014,70.88662612167445,132.52789353965082,122.75882197981431,125.44916459013086,104.37747167043875,142.10428753210553]",
      },
      {
        id: "A1-S7-0",
        productLine: "Assembly Line A",
        station: "Station 7",
        machineType: "Circuit Printer",
        operator: "Team Gamma",
        productType: "Widget Y",
        outputRate: 238,
        cycletime: 107.75,
        efficiency: 98,
        defectRate: 0.31,
        defectCount: 0,
        downtime: 1.79,
        utilization: 72,
        energy: 1209,
        status: "Idle",
        maintenanceDate: "2025-11-04",
        cycleTimeData:
          "[130.33540914413294,77.42236372680871,69.99188329623145,114.87014084397443,149.20688163344428,141.4714538382937,61.892664881351635,96.36691226191824,131.45597839106108,104.50579140983862]",
      },
      {
        id: "A1-S8-0",
        productLine: "Assembly Line A",
        station: "Station 8",
        machineType: "Packaging",
        operator: "Team Beta",
        productType: "Widget Y",
        outputRate: 465,
        cycletime: 109.26,
        efficiency: 61,
        defectRate: 0.52,
        defectCount: 2,
        downtime: 0.58,
        utilization: 80,
        energy: 769,
        status: "Unplanned Downtime",
        maintenanceDate: "2025-10-30",
        cycleTimeData:
          "[62.22121450207925,148.89485139357095,116.78014139607225,106.85595005407154,96.89411239024679,148.1231698162332,123.89778187850983,138.98564157173337,74.76619936186262,75.1868201800611]",
      },
      {
        id: "A1-S9-0",
        productLine: "Assembly Line A",
        station: "Station 9",
        machineType: "Robot Arm",
        operator: "Team Alpha",
        productType: "Part Alpha",
        outputRate: 523,
        cycletime: 99.27,
        efficiency: 82,
        defectRate: 2.16,
        defectCount: 11,
        downtime: 3.93,
        utilization: 85,
        energy: 1496,
        status: "Running",
        maintenanceDate: "2025-11-11",
        cycleTimeData:
          "[106.60185320807427,85.76999225879072,130.05615507814832,55.0581170044171,65.43170099653888,134.46673095745228,130.2630567348399,89.06515172067908,56.842788727345315,139.09739933790522]",
      },
      {
        id: "A1-S10-0",
        productLine: "Assembly Line A",
        station: "Station 10",
        machineType: "Packaging",
        operator: "Team Alpha",
        productType: "Component X",
        outputRate: 637,
        cycletime: 108.37,
        efficiency: 99,
        defectRate: 4.23,
        defectCount: 26,
        downtime: 3.73,
        utilization: 73,
        energy: 998,
        status: "Running",
        maintenanceDate: "2025-11-11",
        cycleTimeData:
          "[80.11960417300608,119.62429437918756,148.39130662259163,140.59286928815436,58.48810717898336,108.49242694345425,131.7440309221356,112.81854976818829,73.47240808992343,109.94012382365185]",
      },
    ],
  },
  {
    id: "A1-1",
    productLine: "Assembly Line A",
    stations: [
      {
        id: "A1-S1-1",
        productLine: "Assembly Line A",
        station: "Station 1",
        machineType: "Packaging",
        operator: "Team Epsilon",
        productType: "Unit Beta",
        outputRate: 281,
        cycletime: 97.93,
        efficiency: 83,
        defectRate: 1.9,
        defectCount: 5,
        downtime: 1.03,
        utilization: 86,
        energy: 831,
        status: "Running",
        maintenanceDate: "2025-10-29",
        cycleTimeData:
          "[128.52350724198635,77.43063750285013,129.33926899683294,100.18881621522374,136.12242448605383,74.36850529057165,70.4707960825269,87.41330307724608,74.45846000878078,100.96245869877363]",
      },
      {
        id: "A1-S2-1",
        productLine: "Assembly Line A",
        station: "Station 2",
        machineType: "Circuit Printer",
        operator: "Team Zeta",
        productType: "System Gamma",
        outputRate: 321,
        cycletime: 109.44,
        efficiency: 81,
        defectRate: 4.82,
        defectCount: 15,
        downtime: 3.42,
        utilization: 83,
        energy: 962,
        status: "Running",
        maintenanceDate: "2025-10-19",
        cycleTimeData:
          "[91.60161795157364,139.59210747283498,98.08648772353625,115.14339710244013,89.94484821445934,62.49987927615939,118.92394767135777,131.1879083676196,148.30922503267752,99.1109405538533]",
      },
      {
        id: "A1-S3-1",
        productLine: "Assembly Line A",
        station: "Station 3",
        machineType: "CNC Machine",
        operator: "Team Zeta",
        productType: "System Gamma",
        outputRate: 551,
        cycletime: 98.38,
        efficiency: 83,
        defectRate: 4.97,
        defectCount: 27,
        downtime: 2.43,
        utilization: 95,
        energy: 776,
        status: "Running",
        maintenanceDate: "2025-10-23",
        cycleTimeData:
          "[130.21534128769244,64.0860481839087,106.86408843694576,70.1415958848384,144.5955313843998,131.41506993153013,53.187670299494805,98.35316704373658,93.35497753282792,91.55935641937916]",
      },
      {
        id: "A1-S4-1",
        productLine: "Assembly Line A",
        station: "Station 4",
        machineType: "Quality Scanner",
        operator: "Team Gamma",
        productType: "Unit Beta",
        outputRate: 661,
        cycletime: 105.84,
        efficiency: 96,
        defectRate: 0.01,
        defectCount: 0,
        downtime: 1.38,
        utilization: 75,
        energy: 940,
        status: "Running",
        maintenanceDate: "2025-11-02",
        cycleTimeData:
          "[101.0737149644859,54.88229257620421,118.04415140962774,124.5663060190663,68.83187447220712,107.78581040079524,116.8306354806842,141.49869469768805,131.93045335781636,92.9719249491298]",
      },
      {
        id: "A1-S5-1",
        productLine: "Assembly Line A",
        station: "Station 5",
        machineType: "Quality Scanner",
        operator: "Team Delta",
        productType: "Unit Beta",
        outputRate: 203,
        cycletime: 113.22,
        efficiency: 87,
        defectRate: 0.86,
        defectCount: 1,
        downtime: 1.02,
        utilization: 76,
        energy: 1295,
        status: "Running",
        maintenanceDate: "2025-11-10",
        cycleTimeData:
          "[140.3428579571643,138.09284006224055,146.60443000269711,111.28245043368112,100.15876198968016,107.73705911207949,62.22349465465919,107.65890027966341,104.13317709560657,114.0070406174842]",
      },
      {
        id: "A1-S6-1",
        productLine: "Assembly Line A",
        station: "Station 6",
        machineType: "Packaging",
        operator: "Team Beta",
        productType: "System Gamma",
        outputRate: 510,
        cycletime: 112.74,
        efficiency: 82,
        defectRate: 3.35,
        defectCount: 17,
        downtime: 3.11,
        utilization: 77,
        energy: 932,
        status: "Unplanned Downtime",
        maintenanceDate: "2025-10-23",
        cycleTimeData:
          "[147.3416571388899,130.3228815286294,75.20609442558012,76.49292717493852,83.9899460011682,120.65684349224742,138.84346487794244,99.05814128129214,118.29813943210989,137.22121771575473]",
      },
      {
        id: "A1-S7-1",
        productLine: "Assembly Line A",
        station: "Station 7",
        machineType: "CNC Machine",
        operator: "Team Alpha",
        productType: "Part Alpha",
        outputRate: 220,
        cycletime: 104.82,
        efficiency: 83,
        defectRate: 0.52,
        defectCount: 1,
        downtime: 2.02,
        utilization: 93,
        energy: 1285,
        status: "Scheduled Maintenance",
        maintenanceDate: "2025-10-17",
        cycleTimeData:
          "[108.2318571546208,95.711647466279,133.4851170744513,94.87573887977905,104.04328317391682,145.9902769428038,108.88093604479845,79.2779703602095,95.27972562450694,82.37929847038947]",
      },
      {
        id: "A1-S8-1",
        productLine: "Assembly Line A",
        station: "Station 8",
        machineType: "CNC Machine",
        operator: "Team Epsilon",
        productType: "Part Alpha",
        outputRate: 438,
        cycletime: 110.41,
        efficiency: 99,
        defectRate: 0.89,
        defectCount: 3,
        downtime: 2.8,
        utilization: 98,
        energy: 705,
        status: "Running",
        maintenanceDate: "2025-11-11",
        cycleTimeData:
          "[130.09587797671952,137.3126555584659,123.54935029431896,115.06467784575831,113.39096690616009,116.30724283899232,62.36455535395451,89.31342152573893,127.31849844203921,89.38622202830811]",
      },
      {
        id: "A1-S9-1",
        productLine: "Assembly Line A",
        station: "Station 9",
        machineType: "Packaging",
        operator: "Team Gamma",
        productType: "Widget Y",
        outputRate: 652,
        cycletime: 85.5,
        efficiency: 69,
        defectRate: 2.06,
        defectCount: 13,
        downtime: 3.15,
        utilization: 96,
        energy: 947,
        status: "Running",
        maintenanceDate: "2025-10-20",
        cycleTimeData:
          "[64.53906282603639,147.56529923535115,50.155840655948914,74.36210848387226,93.88624794710816,111.6878131373878,72.00681967167839,104.5031688282922,76.94624621262122,59.34190566593405]",
      },
      {
        id: "A1-S10-1",
        productLine: "Assembly Line A",
        station: "Station 10",
        machineType: "Injection Molder",
        operator: "Team Delta",
        productType: "Unit Beta",
        outputRate: 565,
        cycletime: 93.68,
        efficiency: 87,
        defectRate: 1.31,
        defectCount: 7,
        downtime: 2.45,
        utilization: 72,
        energy: 998,
        status: "Running",
        maintenanceDate: "2025-10-20",
        cycleTimeData:
          "[114.89925016327587,59.15825415841949,141.3305562272565,109.03554454533197,82.29159322896564,89.21258011417811,80.03606173091424,52.26026984444994,75.39708652352328,133.20548021235874]",
      },
    ],
  },
  {
    id: "A1-2",
    productLine: "Assembly Line A",
    stations: [
      {
        id: "A1-S1-2",
        productLine: "Assembly Line A",
        station: "Station 1",
        machineType: "Circuit Printer",
        operator: "Team Delta",
        productType: "Component X",
        outputRate: 465,
        cycletime: 104.66,
        efficiency: 74,
        defectRate: 4.9,
        defectCount: 22,
        downtime: 3.3,
        utilization: 88,
        energy: 1179,
        status: "Running",
        maintenanceDate: "2025-10-28",
        cycleTimeData:
          "[131.8161292058691,64.5449334572,126.66887268621996,84.75553661129388,137.017896886499,115.96032599462553,111.67380716606073,97.0685875639089,117.78931953418737,59.304651717907106]",
      },
      {
        id: "A1-S2-2",
        productLine: "Assembly Line A",
        station: "Station 2",
        machineType: "Quality Scanner",
        operator: "Team Zeta",
        productType: "System Gamma",
        outputRate: 415,
        cycletime: 92.8,
        efficiency: 64,
        defectRate: 1.8,
        defectCount: 7,
        downtime: 3,
        utilization: 83,
        energy: 1478,
        status: "Running",
        maintenanceDate: "2025-11-05",
        cycleTimeData:
          "[125.09898584644479,66.2933340154058,63.41022009179484,89.49043075427694,125.66677960425065,75.75080270195292,141.20893968029134,77.43713775123288,92.25197748338958,71.42899170518393]",
      },
      {
        id: "A1-S3-2",
        productLine: "Assembly Line A",
        station: "Station 3",
        machineType: "CNC Machine",
        operator: "Team Zeta",
        productType: "Unit Beta",
        outputRate: 496,
        cycletime: 99.42,
        efficiency: 70,
        defectRate: 0.56,
        defectCount: 2,
        downtime: 3.74,
        utilization: 78,
        energy: 1242,
        status: "Running",
        maintenanceDate: "2025-10-29",
        cycleTimeData:
          "[98.9176790512744,147.7302916725577,110.47102351517356,61.55784714072803,90.99999590203302,90.66901344334588,114.05951544130828,74.78964275589226,105.46701035759352,99.57576749754878]",
      },
      {
        id: "A1-S4-2",
        productLine: "Assembly Line A",
        station: "Station 4",
        machineType: "Robot Arm",
        operator: "Team Alpha",
        productType: "Component X",
        outputRate: 289,
        cycletime: 98.25,
        efficiency: 85,
        defectRate: 2.91,
        defectCount: 8,
        downtime: 0.63,
        utilization: 94,
        energy: 1141,
        status: "Scheduled Maintenance",
        maintenanceDate: "2025-10-24",
        cycleTimeData:
          "[120.1002427056808,66.26141925518783,85.24337713254558,57.95044190059853,140.82449259620176,63.375769504151265,81.19935418397309,97.94114936844272,139.4772507446164,130.08197931188818]",
      },
      {
        id: "A1-S5-2",
        productLine: "Assembly Line A",
        station: "Station 5",
        machineType: "Circuit Printer",
        operator: "Team Beta",
        productType: "Widget Y",
        outputRate: 438,
        cycletime: 97.62,
        efficiency: 67,
        defectRate: 4.44,
        defectCount: 19,
        downtime: 1.36,
        utilization: 95,
        energy: 1214,
        status: "Running",
        maintenanceDate: "2025-10-27",
        cycleTimeData:
          "[113.98910994085102,66.51576358842439,104.6667933026327,137.1706425499487,56.103841749853636,112.0753563187098,62.026674277154605,101.99459815541417,117.60127799889423,104.03894941607703]",
      },
      {
        id: "A1-S6-2",
        productLine: "Assembly Line A",
        station: "Station 6",
        machineType: "Packaging",
        operator: "Team Gamma",
        productType: "Component X",
        outputRate: 421,
        cycletime: 110.29,
        efficiency: 87,
        defectRate: 4.44,
        defectCount: 18,
        downtime: 2.32,
        utilization: 70,
        energy: 1105,
        status: "Running",
        maintenanceDate: "2025-10-30",
        cycleTimeData:
          "[138.28039767477446,68.85809455417306,114.91377910500266,143.43692629366433,58.7076350736766,69.6365331876133,110.20295312934276,128.83413292193788,136.28289174163615,133.697340052651]",
      },
      {
        id: "A1-S7-2",
        productLine: "Assembly Line A",
        station: "Station 7",
        machineType: "Circuit Printer",
        operator: "Team Gamma",
        productType: "System Gamma",
        outputRate: 613,
        cycletime: 107.94,
        efficiency: 79,
        defectRate: 2.09,
        defectCount: 12,
        downtime: 1.21,
        utilization: 83,
        energy: 930,
        status: "Running",
        maintenanceDate: "2025-10-13",
        cycleTimeData:
          "[136.41880547243625,123.83652568130623,111.83123581420986,123.55021978837053,55.447640267507616,140.87398467099848,115.07318335482705,66.3626957608612,122.93389093840372,83.09254384972651]",
      },
      {
        id: "A1-S8-2",
        productLine: "Assembly Line A",
        station: "Station 8",
        machineType: "Quality Scanner",
        operator: "Team Gamma",
        productType: "Module Z",
        outputRate: 466,
        cycletime: 101.54,
        efficiency: 95,
        defectRate: 1.42,
        defectCount: 6,
        downtime: 1.98,
        utilization: 73,
        energy: 512,
        status: "Running",
        maintenanceDate: "2025-10-23",
        cycleTimeData:
          "[79.23828044689236,50.88598430558082,107.38257134810318,110.46894845545967,148.88391443789158,81.68376940085716,125.28262643639275,99.16605858457041,141.81701347281646,70.61349908277448]",
      },
      {
        id: "A1-S9-2",
        productLine: "Assembly Line A",
        station: "Station 9",
        machineType: "Circuit Printer",
        operator: "Team Epsilon",
        productType: "Unit Beta",
        outputRate: 570,
        cycletime: 121.95,
        efficiency: 90,
        defectRate: 1.11,
        defectCount: 6,
        downtime: 1.15,
        utilization: 80,
        energy: 1497,
        status: "Running",
        maintenanceDate: "2025-10-29",
        cycleTimeData:
          "[137.84391328988454,148.8763406954371,136.26119797897263,65.01561439272912,143.14080573753853,73.5491627960371,124.20845552128841,112.21329117910838,134.0646738902851,144.33273938725978]",
      },
      {
        id: "A1-S10-2",
        productLine: "Assembly Line A",
        station: "Station 10",
        machineType: "CNC Machine",
        operator: "Team Beta",
        productType: "Widget Y",
        outputRate: 350,
        cycletime: 89.81,
        efficiency: 82,
        defectRate: 1.86,
        defectCount: 6,
        downtime: 2.34,
        utilization: 77,
        energy: 1314,
        status: "Running",
        maintenanceDate: "2025-10-28",
        cycleTimeData:
          "[106.15230272371814,71.74880453933177,70.66845358270506,72.01694525302511,140.67733160155524,55.14491635055947,73.40329731239967,91.97298724632347,73.45108299381417,142.84457838315961]",
      },
      {
        id: "A1-S11-2",
        productLine: "Assembly Line A",
        station: "Station 11",
        machineType: "Quality Scanner",
        operator: "Team Gamma",
        productType: "Module Z",
        outputRate: 609,
        cycletime: 108.73,
        efficiency: 81,
        defectRate: 4.55,
        defectCount: 27,
        downtime: 3.95,
        utilization: 80,
        energy: 520,
        status: "Running",
        maintenanceDate: "2025-11-01",
        cycleTimeData:
          "[60.564430312233526,136.95383169560517,87.0037627950713,100.32919129432975,68.16893043927172,132.66733279233895,142.74728374099283,109.57668601953598,108.98531539902939,140.34631144275858]",
      },
    ],
  },
];

export default function ManufacturingExample({
  expandIcon,
  filterIcon,
  headerCollapseIcon,
  headerExpandIcon,
  height,
  nextIcon,
  prevIcon,
  rowCount = 1000,
  sortDownIcon,
  sortUpIcon,
  theme,
}: {
  expandIcon?: React.ReactNode;
  filterIcon?: React.ReactNode;
  headerCollapseIcon?: React.ReactNode;
  headerExpandIcon?: React.ReactNode;
  height: number | null;
  nextIcon?: React.ReactNode;
  prevIcon?: React.ReactNode;
  rowCount?: number;
  sortDownIcon?: React.ReactNode;
  sortUpIcon?: React.ReactNode;
  theme?: Theme;
}) {
  const [data, setData] = useState<Row[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch manufacturing data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(window.location.hostname);
        setIsLoading(true);
        const isLocal = typeof window !== "undefined" && window.location.hostname === "localhost";
        const isProduction =
          typeof window !== "undefined" && window.location.hostname.includes("simple-table.com");

        // Use backup data if not on localhost or production
        if (!isLocal && !isProduction) {
          setData(BACKUP_MANUFACTURING_DATA);
          setIsLoading(false);
          return;
        }

        // Use relative path for local development, full URL for production
        const baseUrl = isLocal ? "" : "https://www.simple-table.com";
        const response = await fetch(`${baseUrl}/api/data/manufacturing?rowCount=${rowCount}`);
        if (!response.ok) {
          throw new Error("Failed to fetch manufacturing data");
        }
        const manufacturingData = await response.json();
        setData(manufacturingData);
      } catch (error) {
        console.error("Error fetching manufacturing data:", error);
        // Fallback to backup data on error
        setData(BACKUP_MANUFACTURING_DATA);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [rowCount]);

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: height ? `${height}px` : "70dvh",
          fontSize: "16px",
          color: "#666",
        }}
      >
        Loading manufacturing data...
      </div>
    );
  }

  return (
    <SimpleTable
      columnResizing
      columnReordering
      defaultHeaders={HEADERS}
      expandIcon={expandIcon}
      filterIcon={filterIcon}
      headerCollapseIcon={headerCollapseIcon}
      headerExpandIcon={headerExpandIcon}
      height={height ? `${height}px` : "70dvh"}
      nextIcon={nextIcon}
      prevIcon={prevIcon}
      rowGrouping={["stations"]}
      rowIdAccessor="id"
      rows={data}
      selectableCells
      sortDownIcon={sortDownIcon}
      sortUpIcon={sortUpIcon}
      theme={theme}
    />
  );
}
