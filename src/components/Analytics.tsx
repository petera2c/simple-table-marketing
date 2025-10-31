import Script from "next/script";

export function Analytics() {
  return (
    <>
      {/* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-HS01JZP3DM`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-HS01JZP3DM');
        `}
      </Script>

      {/* Hotjar */}
      <Script id="hotjar" strategy="afterInteractive">
        {`
          (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:5348742,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}
      </Script>

      {/* Tawk.to Live Chat */}
      <Script
        id="tawk-to-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/68f0897ad3ffaa194d3489c8/1j7lpi271';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
        }}
      />

      {/* Rybbit analytics */}
      <Script
        src="https://app.rybbit.io/api/script.js"
        data-site-id="1edc281bc84d"
        strategy="afterInteractive"
      />

      <Script
        src="https://analytics.ahrefs.com/analytics.js"
        data-key="fVZfdX8inZYBS5lrBdLNJQ"
        async
        strategy="afterInteractive"
      />
    </>
  );
}
