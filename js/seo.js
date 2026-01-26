/* ============================================
   SEO 结构化数据生成
   ============================================ */

(function() {
    'use strict';

    // 网站基础信息
    const siteInfo = {
        name: 'Ozon 掘金 PRO',
        description: '专注于 AI 与跨境电商结合的智能运营系统，为 Ozon 平台运营者提供多终端协同的决策与执行工具',
        url: window.location.origin,
        logo: window.location.origin + '/logogold.svg'
    };

    // 生成组织结构化数据
    function generateOrganizationSchema() {
        return {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": siteInfo.name,
            "url": siteInfo.url,
            "logo": siteInfo.logo,
            "description": siteInfo.description,
            "contactPoint": {
                "@type": "ContactPoint",
                "email": "hello@ozon-pro.com",
                "contactType": "customer service"
            },
            "sameAs": []
        };
    }

    // 生成网站结构化数据
    function generateWebSiteSchema() {
        return {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": siteInfo.name,
            "url": siteInfo.url,
            "description": siteInfo.description,
            "potentialAction": {
                "@type": "SearchAction",
                "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": siteInfo.url + "/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
            }
        };
    }

    // 生成软件应用结构化数据
    function generateSoftwareApplicationSchema() {
        return {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": siteInfo.name,
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web, iOS, Android",
            "offers": {
                "@type": "Offer",
                "price": "3999",
                "priceCurrency": "CNY"
            },
            "description": siteInfo.description
        };
    }

    // 添加结构化数据到页面
    function addStructuredData() {
        const scripts = [
            generateOrganizationSchema(),
            generateWebSiteSchema(),
            generateSoftwareApplicationSchema()
        ];

        scripts.forEach((schema, index) => {
            const script = document.createElement('script');
            script.type = 'application/ld+json';
            script.textContent = JSON.stringify(schema);
            script.id = `schema-${index}`;
            document.head.appendChild(script);
        });
    }

    // 初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', addStructuredData);
    } else {
        addStructuredData();
    }

})();
