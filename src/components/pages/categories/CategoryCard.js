import React from 'react';

const CategoryCard = ({cat}) => {

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mr-8 my-2">
        <img className="h-100 w-80" src={require(`../../../assets/Thumbnail_channel_${cat}.png`)} alt="Caregory"></img>
        <div className="px-6 py-4">
            <p className="text-purple font-sans text-xs">
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </p>
        </div>
    </div>
  )
}

export default CategoryCard