/**
 * some comment
 * @param str any string with length > 0
 * @returns capitalized str
 */
export function capitalize(str: string): string {
	return str[0].toUpperCase() + str.slice(1);
}
