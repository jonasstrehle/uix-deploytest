/**
 * Backend entrypoint:
 * This module provides a default export that defines the UI that is returned from the backend
 * when a page is visited
 */
import { provideRedirect } from "uix/html/entrypoint-providers.tsx"

export default <div>
	<h1>Hello world</h1>
	<input type="text" placeholder="My Text Input"/>
</div>