const db = require("../utils/database")

const getCardsAll =  async () => {
try {
                        const [results] = await db.query('SELECT files FROM rashidde_agent.project');
                        console.log(results)
                        const processedResults = results.map(row => {
                            // Check if imageUrl is not null and convert to Base64, otherwise return null or a placeholder
                            const files = row.files ? `data:image/jpeg;base64,${row.files.toString('base64')}` : null;
                            return { ...row, files };
                          });
                          return processedResults;
                    } catch (error) { 
                        throw error;
                    }



                    


    };


module.exports = {getCardsAll};


