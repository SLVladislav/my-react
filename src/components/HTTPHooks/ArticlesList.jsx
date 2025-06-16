export const ArticlesList = ({ items }) => {
    console.log(items);
    
    return (
        <ul className="space-y-2">
            {items.map(({ objectID, url, title }) => (
                <li key={objectID}>
                    <a href={url} target="_blank" rel="noreferrer noopener" className="text-blue-600 hover:underline">{title}</a>
                </li>
            ))}
        </ul>
    );
}