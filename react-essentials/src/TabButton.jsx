export default function TabButton({children, onSelect}) {
    return (
        <td>
            <button onClick={onSelect}>{children}</button>
        </td>
    );
}