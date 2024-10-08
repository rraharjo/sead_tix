import React from "react";
import axios from "axios";
import datasource from "@/source/url"

export default async function Image({ eventID }) {
  const apiAddress = datasource.backendaddr + datasource.apiURL;
  const getImage = async () => {
    const res = await axios.get(apiAddress + `/events/pictures/${eventID}`, {
      responseType: "arraybuffer"
    })
    const base64 = btoa(
      new Uint8Array(res.data).reduce(
        (data, byte) => data + String.fromCharCode(byte),
        ''
      )
    );
    return base64
  }

  const image = await getImage();


  return (<img
    className="img-ratio rounded-12"
    src={`data:;base64,${image}`}
    width={421}
    height={301} />);
}
