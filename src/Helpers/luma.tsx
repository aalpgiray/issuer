/**
 * Desides between dark or ligth color based on lumunation of background color.
 * @param backgroundColor 
 */
export function calculateColor(backgroundColor: string) {
    const rgb = parseInt(backgroundColor, 16);   // convert rrggbb to decimal
    // tslint:disable-next-line:no-bitwise
    const r = (rgb >> 16) & 0xff;  // extract red
    // tslint:disable-next-line:no-bitwise
    const g = (rgb >> 8) & 0xff;  // extract green
    // tslint:disable-next-line:no-bitwise
    const b = (rgb >> 0) & 0xff;  // extract blue

    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

    if (luma < 150) {
        return 'white';
    } else {
        return 'black';
    }
}