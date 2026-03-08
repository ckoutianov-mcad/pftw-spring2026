import "./FragranceRow.css";

export function FragranceRow({name, fragranceFamily, scentType, notes, description, isLayerable, image, odd}) {
    return (
      <tr className={odd && "odd"}>
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