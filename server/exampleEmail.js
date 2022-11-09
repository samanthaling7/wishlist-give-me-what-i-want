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

    <div id="email" style="padding: 30px 0">
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
          <td align="left" style="color: white; padding: 24px 0">
            <div style="font-size: 30px">
              <p>${username}'s Birthday is just</p>
              <p>1 week away</p>
            </div>
          </td>
          <td
            align="left"
            style="color: white; border-radius: 50px; overflow: hidden"
          >
            <img
              src="https://png.pngtree.com/element_pic/00/16/08/0357a173243cfe4.jpg"
              alt=""
              style="width: 100px"
            />
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
                    src="https://cdn.notonthehighstreet.com/fs/74/33/d568-e5ca-4fc2-bed5-053aec7b782a/original_bottle-top-terracotta-herb-planters.jpg"
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
                    src="https://cdn.notonthehighstreet.com/fs/4c/7c/b54a-dbb0-4ea3-b0bc-30901cf063b6/original_dream-bunny-rabbit-print.jpg"
                  />
                </td>
                <td style="padding-left: 16px">
                  <p>Bunny Nursery Art Print</p>
                  <p style="font-size: 14px">by Happy Jellyfish</p>
                  <p style="font-size: 14px">£18.00</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
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
                    src="https://cdn.notonthehighstreet.com/fs/23/2a/04c3-8eb8-4378-9ddf-42732a62d604/original_personalised-solid-oak-double-egg-cup.jpg"
                  />
                </td>
                <td style="padding-left: 16px">
                  <p>Personalised Solid Oak Double Egg Cup</p>
                  <p style="font-size: 14px">by MijMoj Design</p>
                  <p style="font-size: 14px">£19.95</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td align="center" style="padding-top: 60px">
            <a href="http://localhost:3000/subscriber" class="btn">See Bobbys wishlist!</a>
          </td>
        </tr>
      </table>
    </div>
  </body>
</html>
  `;

module.exports = html;
