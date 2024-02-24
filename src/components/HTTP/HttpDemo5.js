import axios from 'axios';
import React, { useEffect, useState } from 'react'
import LoggerHOC from '../HOC/LoggerHOC';

function HttpDemo5() {
  const [githubData, setGithubData] = useState([])
  const userNames = ['rohitmore45', 'sanjaysamantra1', 'defunkt'];

  const fetchGithubData = async () => {
    let promiseArr = []
    for (let userName of userNames) {
      let promise = await axios.get(`https://api.github.com/users/${userName}`)
      promiseArr.push(promise);
    }
    try {
      let responseArr = await axios.all(promiseArr)
      console.log(responseArr)
      responseArr = responseArr.map(res => res.data)
      setGithubData(responseArr)

    } catch (err) {
      console.log('something went wrong')
    }

  }

  useEffect(() => {
    fetchGithubData();
  }, [])
  return (
    <div>
      <h2 className='text-center'>Github data using axios.all</h2>
      <table className='table table-bordered table-striped'>
        <tbody>
          {
            githubData.map(data => {
              return <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.login}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.followers}</td>
                <td>{data.location}</td>
                <td>{data.public_repos}</td>
              </tr>
            })
          }
        </tbody>
      </table>


    </div>
  )
}
export default HttpDemo5;
// export default LoggerHOC(HttpDemo5);