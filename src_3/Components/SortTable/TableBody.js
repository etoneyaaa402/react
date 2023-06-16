import {TableRaw} from "./TableRaw";

export const TableBody = (content) => {
    return(
        <tbody>
        {content.map(TableRaw)}
        </tbody>
    )
}