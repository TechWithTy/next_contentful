import Link from 'next/link';
import React from 'react';
function RecipeCard({ recipe }) {
  const { title, slug, thumbnail, cookingTime } = recipe.fields;
  return (
    <div className="card">
      <div className="featured"></div>
      <div className="content">
        <div className="info">
          <h4>{title}</h4>
          <p>Takes Approx {cookingTime} mins to make</p>
        </div>
        <div className="actions">
          <Link href={'/recipes/' + slug}>
            <a>Cook this</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
