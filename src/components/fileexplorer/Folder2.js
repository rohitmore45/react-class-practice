import React, { useState } from 'react'

export default function Folder2({ folderInfo }) {

  let [expand, setExpand] = useState(false);

  if (folderInfo.isFolder) {
    return <>
      <div style={{ cursor: 'pointer' }}>
        📁<span onClick={() => setExpand(!expand)}>
          {folderInfo.name}</span>
      </div>

      <div style={{ display: expand ? 'block' : 'none', paddingLeft: 20 }}>

        {folderInfo.items.map((subFolder, ind) => {
          return <Folder2 folderInfo={subFolder} key={ind} />
        })}
      </div>
    </>
  }
  else {
    return <span>
      🏢{folderInfo.name} <br />
    </span>
  }
}
