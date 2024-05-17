// Use async/await to handle the promise returned by find()
async function getDocuments(collection) {
  try {
    // Limit the fields returned for each document to optimize performance
    const projection = { _id: 0, field1: 1, field2: 1 };
    // Assuming 'field1' and 'field2' are the only fields you need

    // Use find() with projection to fetch only necessary fields
    const documents = await collection.find({}, { projection }).toArray();
    return documents;
  } catch (error) {
    console.error('Error fetching documents:', error);
    throw error; // Rethrow the error for further handling
  }
}
