select (e.firstName || ' ' || e.lastName ) as SoldBy,  
o.id, 
o.CustomerId as Customer, 
o.ShipCountry as ShippedTo,
c.CompanyName as OrderedBy 
from [order] as o
join employee as e 
    on o.EmployeeId = e.id
join customer as c 
    on o.CustomerId = c.id;