import React from 'react';
import GeneralCard from '../GeneralCard';

const Index = () => {
  return (
    <>
    <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Recent news</h1>
        </div>
    </header>
    
    <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0  flex flex-wrap">
                <GeneralCard/>
                <GeneralCard/>
                <GeneralCard/>
                <GeneralCard/>
                <GeneralCard/>
            </div>
        </div>
    </main>
    </>
  )
}

export default Index;