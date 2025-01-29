import React from 'react';
import styled from 'styled-components';

// Стиль для таблицы
const Table = styled.table`
  width: 20%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 14px;
  margin-left: auto;
  margin-right: auto;
`;

const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
  background-color: #f2f2f2;
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
`;

const KmapContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
  margin: 20px 0;
  justify-content: center;
`;

const KmapCell = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color || '#fff'};
  border: 1px solid #ddd;
  font-size: 18px;
  mix-blend-mode: multiply; /* Добавляем смешивание цветов */
`;

const KmapDiv = styled.div `
  display: flex;
  gap: 0;  /* Убирает промежутки между элементами */
  justify-content: center;  /* Центрирует по горизонтали */
  align-items: center; 
`;

const mixColors = (colors) => {
  if (colors.length === 1) return colors[0]; // Если один цвет, просто вернуть его

  let r = 0, g = 0, b = 0;
  colors.forEach(color => {
    const match = color.match(/\d+/g); // Извлекаем RGB-значения
    if (match) {
      r += parseInt(match[0], 10);
      g += parseInt(match[1], 10);
      b += parseInt(match[2], 10);
    }
  });

  // Усредняем компоненты цвета
  r = Math.round(r / colors.length);
  g = Math.round(g / colors.length);
  b = Math.round(b / colors.length);

  return `rgb(${r}, ${g}, ${b}, 0.5)`; // Возвращаем усредненный цвет
};

const TruthTable = ({ truthTable }) => {
  return (
    <Table>
      <thead>
        <tr>
          {truthTable[0].map((header, index) => (
            <TableHeader key={index}>{header}</TableHeader>
          ))}
        </tr>
      </thead>
      <tbody>
        {truthTable.slice(1).map((row, index) => (
          <tr key={index}>
            {row.map((cell, i) => (
              <TableCell key={i}>{cell}</TableCell>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

const Kmap = ({ kmap, islands }) => {
  const getIslandColor = (islandIndex) => {
    const colors = [
      'rgb(255, 99, 132, 0.5)',
      'rgb(54, 162, 235, 0.5)',
      'rgb(255, 159, 64, 0.5)',
      'rgb(75, 192, 192, 0.5)',
      'rgb(153, 102, 255, 0.5)',
      'rgb(255, 159, 64, 0.5)',
    ];
    return colors[islandIndex % colors.length];
  };

  return (
    <KmapContainer>
      {kmap.map((row, rowIndex) =>
        row.map((value, colIndex) => {
          // Находим все острова, проходящие через эту ячейку
          const islandIndices = islands
            .map((island, index) =>
              island.points.some(point => point[0] === rowIndex && point[1] === colIndex) ? index : null
            )
            .filter(index => index !== null);

          const colors = islandIndices.map(getIslandColor);
          const mixedColor = colors.length > 0 ? mixColors(colors) : null;

          return (
            <KmapCell key={`${rowIndex}-${colIndex}`} color={mixedColor}>
              {value}
            </KmapCell>
          );
        })
      )}
    </KmapContainer>
  );
};

const BooleanFunctions = ({ pdnf, minimizedDnf }) => {
  const formatDnf = (dnf) => {
    return dnf
      .replace(/A'/g, 'A̅')
      .replace(/B'/g, 'B̅')
      .replace(/C'/g, 'C̅')
      .replace(/D'/g, 'D̅');
  };

  return (
    <div>
      <h3>СДНФ:</h3>
      <p>{formatDnf(pdnf)}</p>
      <h3>Минимизированная ДНФ:</h3>
      <p>{formatDnf(minimizedDnf)}</p>
    </div>
  );
};

const KarnaughMap = ({ data }) => {
  const { truth_table, kmap, islands, pdnf, minimized_dnf } = data;

  return (
    <div>
      <h1>Решение</h1>
      <TruthTable truthTable={truth_table} />
      <h3>Карта Карно (CD↓/AB→):</h3>
      <KmapDiv>
        <Kmap kmap={kmap} islands={islands} />
      </KmapDiv>
      <BooleanFunctions pdnf={pdnf} minimizedDnf={minimized_dnf} />
    </div>
  );
};

export default KarnaughMap;