exports = function() {
  // get keys
  const pub = context.values.get("pub");
  const priv = context.values.get("priv");
  const group = context.values.get("groupID")

  // body
  const body =   {
    "providerSettings":
    "providerName": "AWS",
    "instanceSizeName": "M20"
  }
  // cluster name
  const cluster = 'dev'
  // args
  const arg = {
    scheme: 'https',
    host: 'cloud.mongodb.com',
    path: `api/atlas/v1.0/groups/${group}/clusters/${cluster}?pretty=true`,
    username: pub,
    password: priv,
    headers: {
      'Content-Type': ['application/json'],
      'Accept-Encoding': ['bzip, deflate']
    },
    digestAuth: true,
    body: JSON.stringify(body)
  };
  // send the patch
  response = await context.http.patch(arg);
  // print readable msg
  console.log(JSON.stringify(response));
  // return result
  return response
}
