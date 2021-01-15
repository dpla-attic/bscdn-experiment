import { getDefaultThumbnail } from "lib"

import { useState, useEffect } from "react"
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  imageWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '0.75rem',
  },
  image: {
    borderRadius: '4px',
    height: 'auto',
  }, 
  image_stretch: {
    borderRadius: '4px',
    width: '100%',
    height: 'auto',
  }
}))

const ItemImage = ({ title, type, url, useDefaultImage, defaultImageClass }) => {
  const [updateToDefaultImage, setUpdateToDefaultImage] = useState(false)
  const useDefaultWrapper = updateToDefaultImage || useDefaultImage
  const classes = useStyles()

  useEffect(() => {
     // Check for images that error so we can replace them with a default image
     const _img = document.createElement("img")
     _img.src = url
     _img.onerror = () => {
       setUpdateToDefaultImage(true)
     }
  }, [])

    return (
      <div
        className={`${classes.imageWrapper}
          ${useDefaultWrapper
            ? classes.defaultImageWrapper + " " + defaultImageClass
            : ""}`}
      >
        <img
          src={updateToDefaultImage ? getDefaultThumbnail(type) : url}
          alt={title}
          className={ process.env.FULL_FRAME_IMAGES ? classes.image_stretch : classes.image }
        />
      </div>
    )

}

export default ItemImage
