import React from 'react'

const GeneralCard = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-1 my-2">
        <a href="#">
            <img className="h-100 w-100" src="https://elcomercio.pe/resizer/nYAA6vYIqWnVbWOf_wdIIEE8NXs=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/5YPIC23UZNFNLIPABRQC462TS4.jpg" alt="" />
        </a>
        <div className="px-6 py-4">
            <a href="#">
                <p className="mb-3 text-lg">Noteworthy technology acquisitions 2021</p>
            </a>
            <div className="flex justify-between mx-1 my-4 shadow">
                <div>
                    <p>Categoria</p>
                </div>
                <div>
                    Vistas
                </div>
            </div>
            <div className="flex justify-between mx-1 my-2">
                <div><p>20/20/20</p></div>
                <div>
                    <a href="#" className="py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GeneralCard;