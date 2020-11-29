const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const response = await axios.get("api/search");
      const parseResponse = await response.json();
      console.log(parseResponse, "PARSE RESPONSE")
      setUsers(parseResponse);
    } catch (err) {
      console.error(err.message);
    }
  };