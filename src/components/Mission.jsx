import React from "react";
import { missionData } from "../constants";
import { HiBadgeCheck } from "react-icons/hi";

export const Mission = () => {
  return (
    <div className="mx-4 sm:mx-10 my-5">
      <h2 className="capitalize text-2xl lg:text-4xl font-black text-center">
        party mission
      </h2>
      <p className="my-3">
        Democratic culture and values have been long entrenched in Nigeria,
        communal accountability, consensus building, consultations and debates
        are silent features of Nigerian and indeed African culture.
      </p>
      <p className="my-3">
        These democratic values inspired early nationalists to rise up and
        challenge the disruptive authoritarianism of the British colonialists.
      </p>

      <p className="my-3">
        It is remarkable therefore that Nigeria at independence in 1960 began
        with constitutional democracy; parliament, rule of law and citizen’s
        participation in governance.
      </p>
      <p className="my-3">
        First Republic constitutional rule with all its imperfections heralded
        planned growth and development hitherto denied by colonial dictatorship
        until military intervention in 1966 which disrupted the process of
        democracy in Nigeria.
      </p>
      <p className="my-3">
        Three decades of military rule undermined democracy-its norms and
        values-national development, promoted disunity and perfected the
        phenomenon of wealth without enterprise through corruption. It also
        created the condition for the preeminence of ethnic consciousness as
        against nationalism, thus, perpetrated and deepened the crisis of nation
        building.
      </p>
      <p className="my-3">
        The return to civil and proclamation of the constitution in 1999 once
        again has raised the prospect that democracy in Nigeria has come to
        stay.
      </p>

      <p className="my-3">
        However, civilian governance since 1999 and the way it has impacted on
        the economy, social life and popular expectations tend to entrench a
        notion of hopelessness. this frightening and regrettable development
        creates the urgent need for a salvation and liberation mission in
        Nigeria.
      </p>
      <p className="my-3">
        The elitist, greedy, selfish character and orientation of the current
        dispensation has negatively impacted on the economy and social life
        thereby denying the popular expectations of the inherent benefits of
        democratic process.
      </p>

      <b>
        The imperatives of today therefore demand that all genuine social
        democrats, patriots and progressives must at this historic juncture
        salvage and liberate the nation along the path to democratic renewal and
        development the new challenge calls for a new social contract that must
        bring together committed and altruistic political actors for democratic
        consolidation in Nigeria. This is the mission of our Party.
      </b>

      <p className="my-3">
        The Labour Party will address the issue of political power not as an
        end, bust as the vehicle for the transformation of the country and for
        governance consistent with the ideology of Social Democracy.
      </p>
      <p className="my-3">
        In furtherance of our mission, the Party will embark on programs and
        policies aimed at but not, limited to the following:
      </p>
      {missionData.map((info) => (
        <p key={info} className="my-5 flex items-center space-x-8 text-sm">
          <HiBadgeCheck className="text-green-500 mr-3" />
          {info}
        </p>
      ))}
    </div>
  );
};
