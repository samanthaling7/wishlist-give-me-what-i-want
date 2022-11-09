const html = (
  subscriber,
  username
) => `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html
    xmlns="http://www.w3.org/1999/xhtml"
    xmlns:o="urn:schemas-microsoft-com:office:office"
    xmlns:v="urn:schemas-microsoft-com:vml"
    lang="en"
  >
    <head>
      <link
        rel="stylesheet"
        type="text/css"
        hs-webfonts="true"
        href="https://fonts.googleapis.com/css?family=Lato|Lato:i,b,bi"
      />
      <title>Email template</title>
      <meta property="og:title" content="Email template" />
  
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
      <style type="text/css">
        a {
          text-decoration: underline;
          color: inherit;
          font-weight: bold;
          color: #253342;
        }
  
        h1 {
          font-size: 56px;
          margin-bottom: 10px;
        }
  
        h2 {
          font-size: 28px;
          font-weight: 900;
        }
  
        p {
          font-weight: 100;
          line-height: 40px;
          margin: 0;
        }
  
        td {
          vertical-align: top;
        }
  
        #email {
          margin: auto;
          width: 600px;
          background-color: white;
        }
        .subtle-link {
          font-size: 9px;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #cbd6e2;
        }
        .btn {
          background-color: #7066e0;
          color: white;
          border-radius: 10px;
          padding: 16px 24px;
          text-decoration: none;
        }
        .btn:hover {
          background-color: #280664;
        }
      </style>
    </head>
  
    <body
      bgcolor="#F5F8FA"
      style="
        width: 100%;
        margin: auto 0;
        padding: 0;
        font-family: Lato, sans-serif;
        font-size: 18px;
        color: #33475b;
        word-break: break-word;
      "
    >
      <! View in Browser Link -->
  
      <div id="email">
        <table align="right" role="presentation">
          <tr>
            <td>
              <a class="subtle-link" href="#">View in Browser</a>
            </td>
          </tr>
  
          <tr></tr>
        </table>
  
        <! Banner -->
        <table
          role="presentation"
          width="100%"
          bgcolor="#7066e0"
          role="presentation"
          border="0"
          cellpadding="0"
          cellspacing="10px"
          style="padding: 0 30px 0 60px"
        >
          <tr>
            <td align="center" style="color: white" colspan="2">
              <h1>Hey ${subscriber.username}</h1>
            </td>
          </tr>
          <tr>
            <td align="left" style="color: white">
              <div style="font-size: 30px">
                <p>${username} Birthday is just</p>
                <p>1 week away</p>
              </div>
            </td>
            <td align="left" style="color: white; ">
              <img src="https://png.pngtree.com/element_pic/00/16/08/0357a173243cfe4.jpg" alt="" style="width: 100px" />
            </td>
          </tr>
        </table>
  
        <! First Row -->
  
        <table
          role="presentation"
          border="0"
          cellpadding="0"
          cellspacing="10px"
          style="padding: 30px 30px 30px 60px"
        >
          <tr>
            <td>
              <p>
                I'm sure you've spent day and night planing and hunting for the
                perfect gift...
              </p>
              <p>No? Don't worry, we know juts what to get</p>
            </td>
          </tr>
        </table>
  
        <! Second Row with Two Columns-->
  
        <table
          role="presentation"
          border="0"
          cellpadding="0"
          cellspacing="10px"
          width="100%"
          style="padding: 0 30px 30px 60px"
          >
          <tr>
            <td
              style="
                border: 1px solid black;
                box-shadow: 3px 3px 0px 0px rgba(0, 0, 0, 1);
                border-radius: 6px;
                overflow: hidden;
              "
            >
              <table cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <img
                      style="
                        width: 150px;
                        height: 130px;
                        object-fit: cover;
                        display: block;
                      "
                      src="https://images.unsplash.com/photo-1661956602926-db6b25f75947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=998&q=80"
                    />
                  </td>
                  <td style="padding-left: 16px">
                    <p>Bottle Top Herb Planters</p>
                    <p style="font-size: 14px">by TheLittleBoysRoom</p>
                    <p style="font-size: 14px">£18.96</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding-top: 60px">
              <a href="http://localhost:3000" class="btn">See Bobbys wishlist!</a>
            </td>
          </tr>
        </table>
      </div>
    </body>
  </html>
  `;

module.exports = html;
