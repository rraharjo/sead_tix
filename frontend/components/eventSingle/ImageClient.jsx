import React, {useState, useEffect} from "react";
import axios from "axios";
import datasource from "@/source/url"

export default function Image({ eventID }) {
  const [image, setImage] = useState("");
  const apiAddress = datasource.backendaddr + datasource.apiURL;
  useEffect(() => {
    const getImage = () => {
      axios.get(apiAddress + `/events/pictures/${eventID}`, {
          responseType: "arraybuffer"
        })
        .then((res) => {
        const base64 = btoa(
          new Uint8Array(res.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ''
          )
        )
        setImage(base64)
      })
    }
    getImage();
  });


  return (<img
    className="img-ratio rounded-12"
    src={`data:;base64,${image}`}
    width={421}
    height={301} />);
}
