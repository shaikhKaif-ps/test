import React from 'react'

const Test = async() => {
    const result = await leadershipAPI();
    console.log(result);
    
  return (
    <div>
        {
            result &&
            result.map((item)=>{
                return <h1 className='my-5 bg-cyan-400'>{item?.acf.leadership_designation} </h1>
            })
        }
    </div>
  )
}

export default Test




async function leadershipAPI() {
    const response = await fetch('https://wordpress-1034502-4717804.cloudwaysapps.com/wp-json/wp/v2/leadership_team', {
        next:{revalidate:5}
      });

    if (!response.ok) {
        throw new Error('An error occurred while fetching the data');
    }
    const posts = await response.json();

  return (
    posts
  )
}
