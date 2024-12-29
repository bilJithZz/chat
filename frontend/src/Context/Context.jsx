const { createContext, useEffect } = require("react");



export  const BlogContext=createContext

export const Blogprovider=({Children})=>{

    const [data,setData]=useStae()

    useEffect(
      {
          setData(Blogdata)
      },[]
    )
      const value={data}

    return(
      <BlogContext.provider value={value}>
        {Children}
      </BlogContext.provider>
    )
}