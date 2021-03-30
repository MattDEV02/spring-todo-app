<%@ page
        language='java'
        contentType='text/html; charset=UTF-8'
        pageEncoding='UTF-8'
%>
<!DOCTYPE html>
<html>
<head>
   <meta charset='UTF-8' />
   <meta http-equiv='content-type' content='text/html; charset=UTF-8' />
   <meta name='viewport' content='width=device-width, initial-scale=1' />
   <meta name='theme-color' content='#000000' />
   <meta name='description' content='Todo REST API index' />
   <meta name='author' content='Matteo Lambertucci matteolambertucci3@gmail.com' />
   <meta name='keywords' content='Java, Spring, JSP, Full-Stack' />
   <meta http-equiv='X-UA-Compatible' content='IE=edge' />
   <meta name='application-name' content='todo-index'>
   <meta name='apple-mobile-web-app-title' content='todo-index'>
   <meta name='generator' content='IntelliJ' />
   <meta name='copyright' content='Proprietario di questa Web-App' />
   <meta name='robots' content='noindex' />
   <title>Todo-Index</title>
   <link rel='stylesheet' type='text/css' href='/css/index.css' />
</head>

<body>
<noscript>
   <b>
      You need to enable JavaScript to run this app.
   </b>
</noscript>
<div>
   <h1>Total Todos: ${numTodos}.</h1>
   <%! String route = "/select"; %>
   <ul>
      <li>
         <h2>
            <a
                    href='<% out.println(route); %>'
                    target='_blank'>
               <% out.println(route); %>
            </a>
         </h2>
      </li>
      <li>
         <h2>
            <a
                    href='<% out.println(route + '/'); %>'
                    target='_blank' id='random'>
               <% out.println(route + '/'); %>
            </a>
         </h2>
      </li>
   </ul>
</div>
<script type='text/javascript' src='/js/index.js'></script>
</body>
</html>