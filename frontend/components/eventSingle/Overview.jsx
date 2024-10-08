import React, { useState, useEffect } from "react";
import axios from "axios";
import datasource from "@/source/url"

export default function Overview({eventID}) {
  const apiAddress = datasource.backendaddr + datasource.apiURL;
  const [description, setDescription] = useState("");

  useEffect(() => {
    const getDescription = async () => {
      const response = await axios.get(apiAddress + `/events/description/${eventID}`);
      const data = response.data;
      setDescription(data);
    };
    getDescription();
  });
  return <div dangerouslySetInnerHTML={{ __html: description }}></div>;
  }
