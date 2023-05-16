import React, { useState } from 'react';
import { TextField, Button, Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';

const Form= () => {
  const [blogName, setBlogName] = useState('');
  const [description, setDescription] = useState('');
  const [authorName, setAuthorName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    
    setBlogName('');
    setDescription('');
    setAuthorName('');
  };

  return (
    <div>

    <br></br>    <br></br>
      <h2>ADD BLOG</h2>
      <form onSubmit={handleSubmit}>
        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>
                  <TextField
                    label="Blog Name"
                    value={blogName}
                    onChange={e => setBlogName(e.target.value)}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TextField
                    label="Description"
                    multiline
                    rows={4}
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TextField
                    label="Author Name"
                    value={authorName}
                    onChange={e => setAuthorName(e.target.value)}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Button type="submit" variant="contained" color="success">Submit</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </form>
    </div>
  );
};

export default Form;