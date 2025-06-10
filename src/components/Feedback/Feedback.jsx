export const Feedback = ({click, total}) => {
    const positivePercentFeedback = Math.round((click.good / total) * 100);
    return (
        <div className="bg-white shadow-md rounded-2xl p-6 w-full max-w-sm mx-auto mt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Feedback Summary</h2>
            <ul className="space-y-2 text-lg text-gray-700">
                <li className="flex justify-between">
                    <span>Good:</span>
                    <span>{click.good}</span>
                </li>
                <li className="flex justify-between">
                    <span>Neutral:</span>
                    <span>{click.neutral}</span>
                </li>
                <li className="flex justify-between">
                    <span>Bad:</span>
                    <span>{click.bad}</span>
                </li>
                <li className="flex justify-between font-semibold">
                    <span>Total:</span>
                    <span>{total}</span>
                </li>
                <li className="flex justify-between font-semibold text-green-600">
                    <span>Positive:</span>
                    <span>{positivePercentFeedback}%</span>
                </li>
            </ul>
        </div>
    );
}