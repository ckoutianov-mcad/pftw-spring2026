import './FragranceRow.css';

function FragranceRow({ name, fragranceFamily, scentType, notes, description, isLayerable, image, odd }) {
    return (
      <tr className={odd ? 'odd-row' : 'even-row'}>
        <td>{name}</td>
        <td>{fragranceFamily}</td>
        <td>{scentType}</td>
        <td>{notes}</td>
        <td>{description}</td>
        <td>{isLayerable ? "Yes" : "No" }</td>
        <td>
          <img
            src={image}
            alt={name}
          />
        </td>
      </tr>
    );
}

export default FragranceRow;