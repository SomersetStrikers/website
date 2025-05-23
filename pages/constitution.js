import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Header from "../components/header.tsx";
import Navigation from "../components/navigation.tsx";
import Footer from "../components/footer.tsx";
import React from "react";
import Link from "next/link";

const Page = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="container is-widescreen">
        <Header />
        <Navigation />
        <div className="container narrow">
          <section className="section content">
            <h1 className="title has-text-centered">Constitution</h1>
            <h2 className="title">1. NAME</h2>
            <p>
              The name of the Cricket Club shall be Somerset Strikers and shall
              be referred to Hereafter as the Club.
            </p>
            <h2 className="title">2. HEADQUARTERS</h2>
            <p>
              The administrative headquarters of the Club shall be at 3 Seaview
              Road, Somerset West, 7130.
            </p>
            <h2 className="title">3. OBJECTS</h2>
            <p>The objects, intents and purposes of the Club shall be:</p>
            <p>
              3.1 To function as a recreational club of which the sole or
              principal object is to provide social and recreational amenities
              or facilities to its members by:
            </p>
            <p>
              3.1.1. Promoting the development of junior cricket in the Somerset
              West area by creating a safe, constructive, and competitive
              environment in which children can develop as cricketers, and
              people, with the assistance of committed and responsible parents.
            </p>
            <p>
              3.1.2. Being an inclusive community junior cricket club with a
              goal of catering for all junior players wanting to play
              competitive cricket.
            </p>
            <p>
              The Club is to carry on its activities in a non-profit manner.
            </p>
            <h2 className="title">4. MANAGEMENT</h2>
            <p>
              4.1. The management, control and administration of all matters and
              affairs of the Club shall be vested in a controlling body,
              hereafter referred to as the Committee and which shall be composed
              as follows:
            </p>
            <ul>
              <li>Chairperson</li>
              <li>Vice Chairperson</li>
              <li>Club Captain</li>
              <li>Honorary Treasurer</li>
              <li>Honorary Secretary</li>
            </ul>
            <p>
              4.2. The Committee shall have the power to accept, refuse, and
              cancel membership in the Club. The Committee and any subcommittee
              will be made up of volunteers; no remuneration will be paid to
              these positions.
            </p>
            <p>4.3. All Committee members must be natural persons.</p>
            <p>
              4.4. At least 3 (three) members of the Committee shall be
              unrelated to each other to the third degree of consanguinity.
            </p>
            <p>
              4.5. The members of the Committee accept fiduciary responsibility
              for the Club.
            </p>
            <p>
              4.6. Any person who is disqualified, in terms of South African
              legislation<sup>[1]</sup>, from acting in a fiduciary capacity may
              not be elected as a member of the Committee. Should an acting
              Committee member, in terms of South African legislation, be
              disqualified from acting in a fiduciary capacity, that person
              shall immediately cease to be a Committee member.
            </p>
            <p>
              <small>
                [1] Specifically, section 6 of the Trust Property Control Act
                No. 57 of 1988, section 25A of the Nonprofit Organisations Act
                No. 71 of 1997 or section 69 of the Companies Act No. 71 of
                2008.
              </small>
            </p>
            <h2 className="title">5. POWERS AND DUTIES OF COMMITTEE MEMBERS</h2>
            <h3 className="title">5.1 CHAIRPERSON</h3>
            <p>
              5.1.1. The Chairperson shall represent the Club at all outside
              meetings, unless otherwise decided by the Committee.
            </p>
            <p>
              5.1.2. The Chairperson shall be known and accepted as the
              functional Head of the Club.
            </p>
            <p>
              5.1.3. They shall exercise a casting vote as well as a deliberate
              vote, where the voting is equal.
            </p>
            <p>
              5.1.4. The Chairperson shall be empowered to convene special
              meetings of the Club.
            </p>
            <p>5.1.5. The Chairperson shall convene all internal meetings.</p>
            <p>
              5.1.6. They shall be an authorised signatory and must co-sign any
              authorised payments
            </p>
            <h3 className="title">5.2 VICE CHAIRPERSON</h3>
            <p>5.2.1. To assist the Chairperson in fulfilling their duties.</p>
            <p>
              5.2.2. To stand in for the Chairperson where necessary and/or
              requested.
            </p>
            <p>
              5.2.3. Membership management - communicate membership applications
              to the committee and manage the welcome and information for that
              new member - including introducing them to their age group
              manager.
            </p>
            <h3 className="title">5.3 CLUB CAPTAIN</h3>
            <p>
              5.3.1. The Club Captain shall act as the intermediary between a
              member and the Committee.
            </p>
            <p>
              5.3.2. They shall bring to the notice of the full Committee any
              grievance, or part grievance, of a member and report back to the
              member on the action taken or decision made by the Committee.
            </p>
            <h3 className="title">5.4 HONORARY TREASURER</h3>
            <p>
              5.4.1. The Honorary Treasurer shall have the control of the
              receipts and payments of the Club, shall submit financial reports
              to the Committee, as and when so required, and to present accounts
              for payment. It shall be the duty of the Honorary Treasurer to see
              that all monies received are to be deposited in the Club&apos;s
              account.
            </p>
            <p>
              5.4.2. They shall act ex-officio on any sub-committee which may be
              concerned with income and/or expenditure. They shall be empowered
              to pay all authorised and routine accounts and to submit proper
              books of accounts for auditing once seasonally before the{" "}
              Club&apos;s AGM, with an unaudited review mid-season and shall
              cause the preparation of a financial statement for presentation to
              the Annual General Meeting.
            </p>
            <p>
              5.4.3. They will be an authorised signatory and must co-sign any
              authorised payments
            </p>
            <h3 className="title">5.5 HONORARY SECRETARY</h3>
            <p>
              5.5.1. To conduct all correspondence under the direction of the
              Chairperson.
            </p>
            <p>
              5.5.2. To issue all notices of meetings by direction of the
              Chairperson.
            </p>
            <p>
              5.5.3. To prepare and present the minutes of previous meetings for
              confirmation.
            </p>
            <p>
              5.5.4. To bring all communications directed to the Club, or
              through any other channel, to the notice of the Committee members
              at the first meeting subsequent to the receipt of such
              communication.
            </p>
            <p>
              5.5.5. To perform all duties relevant to the Secretary&apos;s
              Office.
            </p>
            <h2 className="title">6. ADDITIONAL POWERS</h2>
            <p>
              In addition to their duties, members of the Committee shall be
              vested with the following powers:
            </p>
            <p>
              6.1. To institute or defend any action, or any action at law by or
              against the Club.
            </p>
            <p>
              6.2. The Committee shall formulate all the forms required in
              connection with rules and regulations of the Club.
            </p>
            <p>
              6.3. In the event of an emergency arising, the Chairperson shall
              have the power to act for and on behalf of the Committee, with the
              proviso that such action be confirmed at the next meeting to the
              entire Committee.
            </p>
            <p>
              6.4. To fill any vacancy/vacancies that may occur on the
              Committee, temporarily, without having to call a Special General
              Meeting.
            </p>
            <p>
              6.5. To appoint sub-committees and confer on them all or any of
              the powers vested in it under these rules. The Disciplinary
              Committee shall consist of the ruling Committee, which shall deal
              with all cases of misconduct, misdemeanour, breach of Rules of the
              Constitution and for bringing the Club into disrepute.
            </p>
            <p>
              6.6. To hear, to deal with, consider and decide upon appeals or
              complaints by bona fide members.
            </p>
            <p>
              6.7. No member having been suspended shall be reinstated without
              the consent of the Committee.
            </p>
            <p>
              6.8. To decide any disputes, points and questions arising out of
              competitions played under the Club&apos;s jurisdiction.
            </p>
            <p>
              6.9. In any enquiry, the Committee shall have the right to
              subpoena any official or member to give evidence.
            </p>
            <p>
              6.10. To generally carry out the objects of the Club and for such
              purposes to do and perform all such acts and things as may be
              required as necessary.
            </p>
            <p>
              6.11. Should the Committee disregard their responsibility towards
              any member, such member shall be empowered to demand a meeting
              between the Committee and themself. The member concerned shall
              inform the Club Captain in writing for such a meeting, which shall
              be held within 7 days of receipt of such letter.
            </p>
            <p>
              6.12. For meetings as requested above, the Committee shall consist
              of no less than 3 members and no more than 5 members. The voting
              powers shall be equal, except in the case of the Chairperson or
              the Vice-Chairperson, should they chair the meeting, who shall
              have a casting vote as well as a deliberate vote.
            </p>
            <p>
              6.13. The Committee shall have full power and authority to do any
              act which could or might be done by the Club, except in respect of
              such matters as are reserved by this Constitution, to be dealt
              with by General Meeting.
            </p>
            <p>
              6.14. The Committee will be responsible for the nominations and
              selection of trophy winners using the criteria approved by the
              Committee.
            </p>
            <h2 className="title">7. MEMBERSHIP QUALIFICATIONS</h2>
            <p>
              7.1. All players at present affiliated to the Club shall, in
              future, be known and referred to as members.
            </p>
            <p>
              7.2. All members of the Club shall be duly registered in the
              members&apos; register of the Club and shall be entitled to annual
              or seasonal membership .
            </p>
            <p>
              7.3. Any junior candidate for admission to the Club shall require
              a parent/guardian to complete the prescribed online registration
              form.
            </p>
            <p>
              7.4. The Committee shall be empowered to deal with all questions
              of eligibility and shall have the power, without giving cause to
              reason, to refuse, suspend or cancel any such application and the
              Chairperson or the Honorary Secretary of the Club, shall inform
              such candidate accordingly.
            </p>
            <p>
              7.5. All members shall be deemed to pay the annual subscription
              fees in full on or before 31st October and if split, by 31 October
              and 31st January each year, irrespective of whether the
              subscription fees may be increased at a forthcoming Annual or
              Special meeting of the Club.
            </p>
            <p>
              7.6 Members may not sell or transfer any rights attached to their
              membership.
            </p>
            <h2 className="title">8. PLAYING & SOCIAL MEMBERS</h2>
            <p>
              Playing members shall be all those members who are, at the date
              and adoption of this Constitution, registered in the books of the
              Club as members or are hereafter elected as playing members.
            </p>
            <p>
              Social members are those players who participate in practice only
              and do not play league or competitive matches. If a social member
              wishes to change their status to playing member, notice must be
              provided in writing, via email to the Vice Chairperson who will
              communicate the change of membership status request to the
              committee. Deadline for this request will be by the end of the
              calendar year and adjusted fees will be applied.
            </p>
            <h2 className="title">9. SELECTION POLICY</h2>
            <p>
              The Selection Policy will meet the expectations and playing needs
              of the majority of the players enrolled at the club. The Selection
              Policy will be made available prior to the annual subscription due
              dates, 31st October and 31 January and may be reviewed at the end
              of the season by the standing committee.
            </p>
            <p>
              Refer to the published{" "}
              <Link href="/policies/selection">“Selection Policy”</Link>{" "}
              document for a full explanation on the Selection Policy.
            </p>
            <h2 className="title">10. ANTI-DISCRIMINATION POLICY</h2>
            <p>
              The Club strives to be an inclusive club. Discrimination against
              any player or person based on race, culture, language, gender, or
              any other group, will not be tolerated.
            </p>
            <p>
              Please refer to the{" "}
              <Link href="/policies/anti-discrimination-code-of-conduct">
                “Anti-Discrimation Policy”
              </Link>{" "}
              document for the detailed policy.
            </p>
            <h2 className="title">11. FINANCIAL YEAR</h2>
            <p>
              The financial year shall run from May through the end of April.
            </p>
            <h2 className="title">12. ANNUAL SUBSCRIPTIONS</h2>
            <p>
              12.1. Annual subscriptions are due by 31 October, with a split
              payment facility whereby the second payment is due by Jan 31st.
            </p>
            <p>
              12.2. Should any member fail to pay their subscriptions by 31
              October and/or 31 January, such member will be classified as a
              defaulter and refused any further credit. All defaulters could be
              suspended from playing by the Committee.
            </p>
            <p>
              12.3. The Committee shall keep a register of members and the
              required details, which shall be kept by the Honorary Secretary
              and Treasurer.
            </p>
            <p>
              12.4. The Committee will review annual subscription rates annually
              and communicate any changes to the club members.
            </p>
            <h2 className="title">13. COMMITTEE MEETINGS</h2>
            <p>
              13.1. Meetings of the Committee shall be held as often as
              necessary to properly conduct the affairs of the club.
            </p>
            <p>13.2. A quorum for such a meeting shall be three.</p>
            <p>
              13.3. Honorary Secretary to notify the Committee one week in
              advance of such a meeting and gather agenda items.
            </p>
            <p>
              13.4. Any Committee member failing to attend 3 (three) consecutive
              meetings without acceptable explanation, shall be deemed to have
              vacated their seat and the Committee shall have the power to
              select another member in their place until the next Annual General
              Meeting.
            </p>
            <h2 className="title">14. ANNUAL, GENERAL AND SPECIAL MEETINGS</h2>
            <p>
              14.1. The Annual General Meeting of the Club shall be held once a
              year prior to the new junior season starting, and the Secretary
              shall give at least (14) fourteen days&apos; notice of the date
              thereof to all members.
            </p>
            <h2 className="title">15. VOTING POWER</h2>
            <p>
              15.1. The Committee members shall have one (1) vote each, except
              in the case of the Chairperson, who shall have a casting vote as
              well as a deliberate vote, when the voting is equal.
            </p>
            <p>
              15.2. Each junior member shall have one (1) vote which must be
              represented by their parent or legal guardian.
            </p>
            <p>
              15.3. No single person shall be allowed to directly or indirectly
              control the decision-making powers relating to the Club.
            </p>
            <p>
              15.4. No member shall be allowed to vote at any meeting of the
              Club unless they are a fully paid up member.
            </p>
            <p>
              15.5. Details of the Election of Committee Members process is
              published separately.
            </p>
            <h2 className="title">
              16. BUSINESS AT THE ANNUAL GENERAL MEETING
            </h2>
            <ul>
              <li>Notice convening the meeting.</li>
              <li>Attendance Register.</li>
              <li>Apologies.</li>
              <li>
                To read and confirm the minutes of the previous Annual General
                meeting.
              </li>
              <li>Matters arising therefrom.</li>
              <li>
                To receive, confirm and adopt the Treasurer&apos;s Report and
                the Audited Financial Statement and to discuss matters arising
                therefrom.
              </li>
              <li>
                To elect the Office Bearers for the ensuing year. Please note,
                the election rules are to be found in the{" "}
                <Link href="/policies/annual-general-meeting-process">
                  “AGM - Election of Committee” process document
                </Link>
                .
              </li>
              <li>
                To consider any proposed additions, alterations or amendments to
                the Constitution, Rules and By-Laws.
              </li>
              <li>To deal with correspondence - if any.</li>
              <li>To discuss any other business - general.</li>
              <li>To close the meeting.</li>
            </ul>
            <h2 className="title">17. QUORUM</h2>
            <p>
              A quorum for the Annual General Meeting shall be a minimum of 33%
              of fully paid up members eligible to vote. The Quorum can be
              achieved either in person or digitally or a combination of both
              [1].
            </p>
            <p id="">
              <small>
                [1] Quorum amended Thursday 13 April 2023 to reflect the vote to
                amend. See minutes of 2023 AGM.
              </small>
            </p>
            <h2 className="title">18. SPECIAL GENERAL MEETINGS</h2>
            <p>
              A Special General Meeting of the Club shall be called by the
              Committee as it may deem fit or on a resolution or requisition
              delivered to the Secretary of the Club signed by 75% of the
              members.
            </p>
            <h2 className="title">
              19. PROCEDURE AT A SPECIAL GENERAL MEETING
            </h2>
            <p>19.1. To read the notice convening the meeting.</p>
            <p>
              19.2. To discuss the special business for which the meeting was
              convened.
            </p>
            <p>
              19.3. To resolve or reject item (2) above in its original or
              amended form.
            </p>
            <p>19.4. Closure.</p>

            <h2 className="title">
              20. ACTIVITIES OF CLUB TO BE CARRIED ON IN NON-PROFIT MANNER
            </h2>
            <p>
              20.1 The activities of the Club may not be conducted with a
              profit-making intention. This clause does not prevent the Club
              from accumulating a financial surplus to achieve the Club’s
              objectives set out in clause 3.
            </p>
            <p>
              20.2 The Club may not pay remuneration to any person, which is
              excessive having regard to remuneration which is generally
              reasonable for the service delivered. Nor may the remuneration be
              determined as a percentage of the Club’s income or surplus.
            </p>

            <h2 className="title">21. PROHIBITION OF DISTRIBUTIONS</h2>
            <p>
              The Club is prohibited from making any direct or indirect
              distributions to any person other than in terms of clause 22
              below.
            </p>

            <h2 className="title">
              22. CLOSURE OF SOMERSET STRIKERS CRICKET CLUB
            </h2>
            <p>
              22.1. Should the Club cease to exist then all monies and assets
              shall be donated to any registered charity or organisation chosen
              by the last elected Committee members of the Somerset Strikers
              Cricket Club.
            </p>
            <p>
              22.2. The registered charity or organisation that is chosen in
              accordance with 20.1 is required to be an entity listed in section
              30A(2)(a)(iii) of the Income Tax Act No. 58 of 1962 (as amended)
              (“the IT Act”).
            </p>
            <h2 className="title">
              23. ADOPTION OF THE CONSTITUTION, RULES AND BY-LAWS
            </h2>
            <p>
              The aforementioned articles, rules and by-laws of the Constitution
              have been accepted by the Somerset Strikers founding members.
            </p>
            <h2 className="title">24. OUR MISSION STATEMENT</h2>
            <p>
              Somerset Strikers is an inclusive club that strives to include
              players of all abilities. Our primary goal is to encourage a team
              environment where players understand their roles in the team and
              through the support of their teammates have the confidence to
              fulfil that role without fear of failure. Somerset Strikers will
              play cricket in a sportsmanlike fashion, giving due respect to the
              game and its traditions.
            </p>

            <h2 className="title">25. FURTHER UNDERTAKINGS</h2>
            <p>
              25.1 The Club undertakes to submit a copy of any amendment to its
              Constitution to the Commissioner of SARS.
            </p>
            <p>
              25.2 The Club will further not permit itself to be used as part of
              any transaction, operation or scheme of which the sole or main
              purpose is or was the reduction, postponement or avoidance of
              liability for any tax, duty or levy, which, but for that
              transaction, operation or scheme, would have been or would have
              become payable by any person under the IT Act or any other Act
              administered by the Commissioner.{" "}
            </p>

            <p className="has-text-centered">
              Committee: Jimmy Sounes (Chairperson), Paul Watson (Vice
              Chairperson), Abby Hunter (Honorary Secretary), Leonard
              Willemse (Honorary Treasurer), Stefan Boshoff (Club Captain)
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Page;
