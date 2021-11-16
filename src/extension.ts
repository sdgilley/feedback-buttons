// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export async function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "buttons" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('feedback-buttons.addButtons', async () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		// vscode.window.showInformationMessage('Hello VS Code from buttons!');
		//const input = await vscode.window.showInputBox();
		// const input = 'new-section'
		
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			return;
		} else {
			const value = await vscode.window.showInputBox({
				prompt: 'Name the section',
			});

			if (!value) {
				vscode.window.showInformationMessage("You didn't enter a value");
				return;
			}

			enterText( value);
			
		}
		

		function enterText(text: string) {
			const editor = vscode.window.activeTextEditor;
			const markup = "<! --- Put the next line at the top (above the h2) for your current section --->\n" +  
			"<a name='" + text + "'></a>\n\n" + 
			"<! --- Put the next 2 lines to the end of your current section.  Change the value of the <next-section-id> and <surveyurl> --->\n" +
			"> [!div class='nextstepaction']\n" + 
			">[I created the control script](?success=" + text + "#<next-section-id>) [I ran into an issue](<surveyurl>?issue=" + text + ")"

			if (editor) {
				editor.edit(editBuilder => {
					editBuilder.insert(editor.selection.active, markup);
				});
			}
		}


	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
