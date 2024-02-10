import React, { useState } from 'react'

export default function Folder({ folderInfo }) {
  let [expand, setExpand] = useState(false);

  // console.log(folderInfo)
  if (folderInfo.isFolder) {
    return <div>
      📁
      <span style={{ cursor: 'pointer' }}
        onClick={() => setExpand(!expand)}>{folderInfo.name}
      </span><br />

      <div style={{ display: expand ? 'block' : 'none', paddingLeft: 20 }}>

        {folderInfo.items.map((subFolder, ind) => {
          return <Folder folderInfo={subFolder} key={ind} />
        })}

      </div>
    </div>
  }
  else {
    return <>
      <span>
        🏢
        {folderInfo.name}
      </span>
      <br />
    </>
  }

}
