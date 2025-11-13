import React from 'react'

export const Article = ({ title, date, preview, minutes }) => {
    const getReadTimeEmoji = (mins) => {
        if (mins < 30) {
            const cups = Math.ceil(mins / 5);
            return `${'☕️'.repeat(cups)} ${mins} min read`;
        } else {
            const boxes = Math.ceil(mins / 10);
            return `${'🍱'.repeat(boxes)} ${mins} min read`;
        }
    };
    return (

        <article>
            <h3>{title}</h3>
            <small>{date ? date : "January 1, 1970"}. {getReadTimeEmoji(minutes)}</small>
            <p>{preview}</p>
        </article>

    )
}
