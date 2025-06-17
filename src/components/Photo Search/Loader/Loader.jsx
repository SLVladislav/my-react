import {  CSSProperties } from "react"
import { ClipLoader } from "react-spinners"

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

export const Loader = ({ loading, color = "#ffffff", size = 150}) => {
    
  
    return (
        <div className="sweet-loading">  
        <ClipLoader
          color={color}
          loading={loading}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    )
}