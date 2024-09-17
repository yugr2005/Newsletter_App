export function Card({ article }) {
    return (
        <div className="flex border p-4 rounded-lg shadow-lg w-full max-w-3xl">
            {/* Image on the left, taking up 1/3 of the card */}
            <div className="w-1/3 h-48">
                <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover rounded-lg"
                />
            </div>

            {/* Text content on the right, taking up the rest */}
            <div className="w-2/3 pl-4 flex flex-col justify-between">
                {/* Title and Source */}
                <div>
                    <h1 className="text-lg font-bold mb-1 line-clamp-2">{article.title}</h1>
                    <p className="text-sm text-gray-500 mb-2">{article.source}</p>
                </div>

                {/* Description */}
                <p className="text-sm leading-snug line-clamp-3">
                    {article.description}
                </p>
            </div>
        </div>
    );
}
