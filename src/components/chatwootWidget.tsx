'use client';
import React from 'react';

interface BrevoConversationsQueue {
	q: unknown[][];
}

interface BrevoConversationsFunction {
	(...args: unknown[]): void;
	q?: unknown[][];
}

declare global {
	interface Window {
		chatwootSettings?: Record<string, unknown>;
		chatwootSDK?: Record<string, unknown>;
		BrevoConversationsID?: string;
		BrevoConversations?: BrevoConversationsFunction;
		[key: string]: unknown;
	}
}

class ChatwootWidget extends React.Component {
	componentDidMount() {
		// Add Chatwoot Settings

		// Paste the script from inbox settings except the <script> tag
		(function (d, w, c) {
			w.BrevoConversationsID = '67af03b5b1f4ec1308060d07';
			(w as Window & { [key: string]: BrevoConversationsFunction })[c] =
				(w as Window & { [key: string]: BrevoConversationsFunction })[
					c
				] ||
				function (...args: unknown[]) {
					((w as Window & { [key: string]: BrevoConversationsQueue })[
						c
					].q =
						(
							w as Window & {
								[key: string]: BrevoConversationsQueue;
							}
						)[c].q || []).push(args);
				};
			const s = d.createElement('script');
			s.async = true;
			s.src =
				'https://conversations-widget.brevo.com/brevo-conversations.js';
			if (d.head) d.head.appendChild(s);
		})(document, window, 'BrevoConversations');
	}

	render() {
		return null;
	}
}

export default ChatwootWidget;
