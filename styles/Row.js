import styled from 'styled-components'

const Row = styled.div`
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
    grid-auto-rows: 1fr;
    grid-row-gap: 4rem;
    grid-column-gap: 6rem;
    margin-bottom: 5rem;
`

export default Row;
