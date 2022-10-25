import React from 'react';

const Blog = () => {
    return (
        <div>
            <h3>What is cors?</h3>
            <p>
                Node.js is an open-source and cross-platform runtime used when executing JavaScript code on the server-side. One of the popular Node.js server frameworks is Express. Implementing CORS in Node.js helps you access numerous functionalities on the browser. Express allows you to configure and manage an HTTP server to access resources from the same domain.
            </p>
            <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
            <p>
                Give users a quick, intuitive sign-in process with Firebase Authentication. Allow users to sign in to your app with their Facebook, Twitter, Google or GitHub account with less than 5 minutes of work. Track each step of your onboarding flow to improve the experience. Use Google Analytics for Firebase to log events at every step of your onboarding flow, create funnels to see where users are dropping off, and use Remote Config to make changes to your app to see how it affects conversions.
            </p>
            <p>
                User Authentication is the necessity of any online business. Lets check some of the top tools and Firebase alternatives. STYTCH, Ory, Supabase, Okta, PingIdentity, Keycloak, Frontegg, Authress, Auth0, Firebase, Amazon Cognito, OneLogin
            </p>
            <h3>How does the private route work?</h3>
            <p>
                The private route component is used to protect selected pages in a React app from unauthenticated users. The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
            </p>
            <h3>What is Node? How does Node work?</h3>
            <p>
                Although there were other projects to bring JavaScript to server-side applications, the functionality took off with the launch of Node.js in 2009. Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications. Node.js is written in C, C++, and JavaScript, and it is built on the open-source V8 JavaScript engine which also powers JS in browsers such as Google Chrome. As V8 supports new features in JavaScript, they are incorporated into Node.
            </p>
            <p>
                It initializes virtual machines based on the V8 JavaScript engine, where the programming language is JavaScript. It works on asynchronous principle with single thread event loop execution. Thankfully it is spared from code block I/O problems. Also it has an HTTP module so it can work as a standalone web server.
            </p>
        </div>
    );
};

export default Blog;