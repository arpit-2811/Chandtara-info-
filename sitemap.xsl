<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap | Chandtara Infra Private Limited</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
            color: #333;
            background: #F8F9FE;
            margin: 0;
            padding: 40px 20px;
          }
          .container {
            max-width: 900px;
            margin: 0 auto;
            background: #FFF;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.06);
            border: 1px solid #E2E8F0;
          }
          h1 {
            color: #3B2A8F;
            font-size: 24px;
            margin-top: 0;
            display: flex;
            align-items: center;
            gap: 10px;
          }
          p {
            color: #64748B;
            font-size: 14px;
            line-height: 1.6;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
          }
          th {
            background: #3B2A8F;
            color: #FFF;
            text-align: left;
            padding: 12px 14px;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          th:first-child { border-top-left-radius: 6px; }
          th:last-child { border-top-right-radius: 6px; }
          td {
            padding: 12px 14px;
            border-bottom: 1px solid #E2E8F0;
            font-size: 13px;
          }
          tr:hover td {
            background: #F1F5F9;
          }
          a {
            color: #3B2A8F;
            text-decoration: none;
            font-weight: 600;
          }
          a:hover {
            color: #F28C0F;
            text-decoration: underline;
          }
          .badge {
            background: #FEF3C7;
            color: #92400E;
            padding: 3px 8px;
            border-radius: 20px;
            font-size: 11px;
            font-weight: 700;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>🌐 Chandtara Infra — XML Sitemap</h1>
          <p>
            यह एक्सएमएल साइटमैप (XML Sitemap) सर्च इंजनों (जैसे Google, Bing) द्वारा वेबसाइट के सभी पेजों को तेज़ी से खोजने और इंडेक्स करने के लिए जनरेट किया गया है।
          </p>
          <table>
            <thead>
              <tr>
                <th width="50%">URL</th>
                <th width="20%">Last Modified</th>
                <th width="15%">Change Frequency</th>
                <th width="15%">Priority</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <tr>
                  <td>
                    <a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a>
                  </td>
                  <td><xsl:value-of select="sitemap:lastmod"/></td>
                  <td><span class="badge"><xsl:value-of select="sitemap:changefreq"/></span></td>
                  <td><strong><xsl:value-of select="sitemap:priority"/></strong></td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
