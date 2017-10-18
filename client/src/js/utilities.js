import uniqid from 'uniqid';

export function generateSessionId() {
	return uniqid.time('sessionId-');
}

export function getApiBaseUrl() {
	return "http://localhost:3000/api";
}