import React, { useEffect, useState } from 'react';
import axios from 'src/utils/axios'

const CustomerContainer: React.FC = () => {
	const [data, setData] = useState([])
	useEffect(() => {
		axios.get(' http://dp-smarter-api.tiki.services/revisions/count').then(response => {
			console.log(response)
		})
	});
	return (
		<div>

		</div>
	)
}