import React from 'react'

const CategoryCard = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-8 my-2">
        <img className="h-100 w-80" src="https://elcomercio.pe/resizer/nYAA6vYIqWnVbWOf_wdIIEE8NXs=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/5YPIC23UZNFNLIPABRQC462TS4.jpg" alt="Sunset in the mountains"></img>
        <div className="px-6 py-4">
            <a 
                href='/'
                className="text-gray-700 text-base">
                Lunar
            </a>
        </div>
    </div>
  )
}

export default CategoryCard