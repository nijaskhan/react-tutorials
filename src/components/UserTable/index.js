import React from 'react';

const UserTable = ({ userData }) => {
    return (
        <div style={{ padding: '20px' }}>
            <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                marginTop: '20px',
            }}>
                <thead>
                    <tr style={{
                        backgroundColor: '#f2f2f2',
                        borderBottom: '2px solid #ddd'
                    }}>
                        <th style={tableHeaderStyle}>ID</th>
                        <th style={tableHeaderStyle}>Name</th>
                        <th style={tableHeaderStyle}>email</th>
                        <th style={tableHeaderStyle}>website</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((user) => (
                        <tr key={user.id} style={{
                            borderBottom: '1px solid #ddd'
                        }}>
                            <td style={tableCellStyle}>{user.id}</td>
                            <td style={tableCellStyle}>{user.name}</td>
                            <td style={tableCellStyle}>{user.email}</td>
                            <td style={tableCellStyle}>{user.website}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

// Styles
const tableHeaderStyle = {
    padding: '12px',
    textAlign: 'left',
    fontWeight: 'bold',
};

const tableCellStyle = {
    padding: '12px',
    textAlign: 'left',
};

export default UserTable;