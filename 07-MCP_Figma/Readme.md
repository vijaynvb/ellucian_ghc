# **GitHub Copilot Agent and Figma Integration**

This document provides a step-by-step guide to set up GitHub Copilot Agent and integrate it with Figma, enabling you to leverage AI-powered coding assistance directly within your Figma projects.

## **Pre-requisites**

- Visual Studio Code installed
- Node.js installed
- Figma account

## **Create a Figma API Key**

**1.** Click on your profile icon in Figma.

**2.** Go to **Settings**.

![images](../images/ghc-26.png)

**3.** Click on the **Security** tab.

**4.** Look for the **Personal Access Tokens** section.

![images](../images/ghc-27.png)

**5.** Click on **Generate new token**.

**6.** Enter a name for your token (e.g., "GitHub Copilot Integration").

**7.** Set the expiration date as needed.

**8.** Change all scopes to  **Read Only** or select specific scopes based on your requirements.

**9.** Click on **Generate token**.

![images](../images/ghc-28.png)

**10.** Copy the generated token and store it securely. You will need this token to authenticate your Figma API requests.

![images](../images/ghc-29.png)

---

## **Figma Wireframe URL**


To use the Figma wireframe URL, follow these steps:

**1.** Open your Figma design.

**2.** Click on the **Share** button in the top-right corner of the Figma interface.

![images](../images/ghc-34.png)

**3.** In the sharing options, ensure that the link is set to **Anyone with the link** can view.

**4.** Copy the link provided in the sharing options.

![images](../images/ghc-35.png)

---

## **Set up MCP Server for Figma**

**1.** Open Visual Studio Code.

**2.** Create a new folder for your project (e.g., `figmamcpserver`).

**3.** Create a folder named `.vscode` inside your project folder.

**4.** Inside the `.vscode` folder, create a file named `mcp.json`.

**5.** Add the following content to `mcp.json`:

```json
{
    "servers": {
        "figma": {
            "command": "npx",
            "args": [
                "-y",
                "figma-developer-mcp",
                "--stdio"
            ],
            "env": {
                "FIGMA_API_KEY": "your-figma-api-key-here"
            }
        }
    }
}
```

**6.** Replace `your-figma-api-key-here` with the Figma API key you generated earlier.

**7.** Start the MCP server by clicking on the **start** button shown in the `mcp.json` file in Visual Studio Code.

![images](../images/ghc-30.png)

**8.** Once the server is running, you will see a message indicating that the MCP server is listening for requests (Terminal -> Output).

![images](../images/ghc-31.png)

---

## **Attach Figma to GitHub Copilot Agent**

**1.** Open Github Copilot Chat in Visual Studio Code (`Ctrl + Shift + I`) .

**2.** Change to **Agent Mode** by clicking on the **Agent** icon in the Copilot Chat.

**3.** Click on the **Settings** icon in the Copilot Chat.

![images](../images/ghc-32.png)

**4.** Verify the Figma MCP integration is enabled.

![images](../images/ghc-33.png)

**5.** If not enabled, click on the **Enable** button next to Figma MCP.

---

## **Using GitHub Copilot with Figma**

**1.** Open the Github Copilot Chat in Visual Studio Code.

**2.** Make sure you are in **Agent Mode**.

**3.** Type a query to interact with Figma, such as:

```plaintext
Design an html, css based web page based on the design at <URL
Download the required images into images folder
```

**4.** Replace `<URL>` with the Figma wireframe URL you copied earlier.

**5.** Press `Enter` to send the query.

**6.** The Copilot Agent will process your request and provide you with the necessary code snippets, images, and other resources based on the Figma design.

![images](../images/ghc-36.png)

**7.** The Copilot Agent will provide you with the generated code snippets and resources.

**8.** Verify the html content are similar to the Figma design.

![images](../images/ghc-37.png)

---

## **Conclusion**

You have successfully set up GitHub Copilot Agent and integrated it with Figma. You can now leverage AI-powered coding assistance to enhance your Figma projects, making it easier to translate designs into code.

---