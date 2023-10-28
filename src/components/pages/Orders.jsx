import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { getAnalytics } from '../../services/Analytics';
import { faker } from '@faker-js/faker';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
    const [analyticsData, setAnalyticsData] = React.useState([]);
    const getData = () => {
      getAnalytics((res) => setAnalyticsData([res]));
    };
    React.useEffect(() => {
      getData();
    }, []);
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Company Name</TableCell>
            <TableCell>Second Company Name</TableCell>
            <TableCell>Months</TableCell>
            <TableCell >Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {analyticsData.map((row,inx) => (
            <TableRow key={inx}>
              <TableCell>{row.companyOne}</TableCell>
              <TableCell>{row.companyTwo}</TableCell>
              <TableCell>{row.months[0]}</TableCell>
              <TableCell>{analyticsData?.map((item)=>item.months?.map(()=>faker?.datatype?.number({min: 0, max : 1000}))[0])}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            {analyticsData?.map((row,inx)=>(
<>
            <TableCell>{row.companyOne}</TableCell>
            <TableCell>{row.companyTwo}</TableCell>
            <TableCell>{row.months[1]}</TableCell>
            <TableCell>{analyticsData?.map((item)=>item.months?.map(()=>faker?.datatype?.number({min: 0, max : 1000}))[1])}</TableCell>

</>
            ))}
          </TableRow>
          <TableRow>
            {analyticsData?.map((row,inx)=>(
<>
            <TableCell>{row.companyOne}</TableCell>
            <TableCell>{row.companyTwo}</TableCell>
            <TableCell>{row.months[2]}</TableCell>
            <TableCell>{analyticsData?.map((item)=>item.months?.map(()=>faker?.datatype?.number({min: 0, max : 1000}))[2])}</TableCell>

</>
            ))}
          </TableRow>
          <TableRow>
            {analyticsData?.map((row,inx)=>(
<>
            <TableCell>{row.companyOne}</TableCell>
            <TableCell>{row.companyTwo}</TableCell>
            <TableCell>{row.months[3]}</TableCell>
            <TableCell>{analyticsData?.map((item)=>item.months?.map(()=>faker?.datatype?.number({min: 0, max : 1000}))[3])}</TableCell>

</>
            ))}
          </TableRow>
          <TableRow>
            {analyticsData?.map((row,inx)=>(
<>
            <TableCell>{row.companyOne}</TableCell>
            <TableCell>{row.companyTwo}</TableCell>
            <TableCell>{row.months[4]}</TableCell>
            <TableCell>{analyticsData?.map((item)=>item.months?.map(()=>faker?.datatype?.number({min: 0, max : 1000}))[4])}</TableCell>

</>
            ))}
          </TableRow>
          <TableRow>
            {analyticsData?.map((row,inx)=>(
<>
            <TableCell>{row.companyOne}</TableCell>
            <TableCell>{row.companyTwo}</TableCell>
            <TableCell>{row.months[5]}</TableCell>
            <TableCell>{analyticsData?.map((item)=>item.months?.map(()=>faker?.datatype?.number({min: 0, max : 1000}))[5])}</TableCell>

</>
            ))}
          </TableRow>
          <TableRow>
            {analyticsData?.map((row,inx)=>(
<>
            <TableCell>{row.companyOne}</TableCell>
            <TableCell>{row.companyTwo}</TableCell>
            <TableCell>{row.months[6]}</TableCell>
            <TableCell>{analyticsData?.map((item)=>item.months?.map(()=>faker?.datatype?.number({min: 0, max : 1000}))[6])}</TableCell>

</>
            ))}
          </TableRow>
         
        
         
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}