export function FragranceRow({name, fragranceFamily, scentType, notes, description, isLayerable, image}) {
    return (
      <tr>
        <td>{name}</td>
        <td>{fragranceFamily}</td>
        <td>{scentType}</td>
        <td>{notes}</td>
        <td>{description}</td>
        <td>{isLayerable && "yes"}</td>
        <td>
          <img
            src={image}
            alt={name}
          />
        </td>
      </tr>
    );
}