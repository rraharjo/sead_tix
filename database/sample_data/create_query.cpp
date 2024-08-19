#include <iostream>
#include <vector>
#include <sstream>
#include <fstream>
#include <string>
std::vector<std::string> cityTable = {"city_name, state_id"};
std::vector<std::string> stateTable = {"state_name"};
std::vector<std::string> venueTable = {"venue_name", "max_capacity", "venue_address", "city_id"};
std::vector<std::string> eventClassification = {"event_classification_name"};
std::vector<std::string> eventType = {"event_classification_id, event_type_name"};
std::vector<std::string> eventLeague = {"event_type_id", "event_league_name"};
std::vector<std::string> performerTable = {"performer_name"};
std::vector<std::string> eventTable = {"event_league_id", "event_name", "event_date", "event_description", "event_popularity", "max_capacity", "venue_id"};
std::vector<std::string> performerEventTable = {"performer_id", "event_id"};
std::vector<std::string> customerTable = {"first_name", "last_name", "date_of_birth"};
std::vector<std::string> ticketTable = {"ticket_type", "event_id", "customer_id", "ticket_status"};
std::vector<std::string> ticketPrice = {"event_id", "ticket_type", "ticket_price"};
std::vector<std::string> eventRules = {"event_id", "rules", "allowed"};

std::string getQueries(std::ifstream&, std::string, std::vector<std::string>);

std::vector<std::string> split(std::string s, std::string delimiter);

int main(int argc, char** argv) {
    std::ofstream out("init_db_values.sql");
    std::ifstream inState("states_table.csv");
    std::ifstream inCity("city_table.csv");
    std::ifstream inVenue("venue_table.csv");
    std::ifstream inClassification("event_classification.csv");
    std::ifstream inType("event_type.csv");
    std::ifstream inLeague("event_league.csv");
    std::ifstream inEvent("event_table.csv");
    std::ifstream inPerformer("performer_table.csv");
    std::ifstream inPer("performer_event_relation.csv");
    out << getQueries(inState, "state_table", stateTable); 
    out << getQueries(inCity, "city_table", cityTable); 
    out << getQueries(inVenue, "venue_table", venueTable); 
    out << getQueries(inClassification, "event_classification_table", eventClassification); 
    out << getQueries(inType, "event_type_table", eventType); 
    out << getQueries(inLeague, "event_league_table", eventLeague); 
    out << getQueries(inEvent, "event_table", eventTable); 
    out << getQueries(inPerformer, "performer_table", performerTable); 
    out << getQueries(inPer, "performer_event_relation", performerEventTable); 
    return 0;
}

std::string getQueries(std::ifstream& i, std::string tableName, std::vector<std::string> cols){
    std::string result = "insert into " + tableName + "(";
    std::string line;
    std::getline(i, line);//throw first line
    for (int i = 0 ; i < cols.size() - 1 ; i++){
        result += cols[i] + ",";
    }
    result += cols[cols.size() - 1] + ")\nvalues\n";
    while (std::getline(i, line)){
        std::vector<std::string> arrLine = split(line, ",");
        result += "\t(";
        for (int i = 0 ; i < arrLine.size() - 1 ; i++){
            if (arrLine[i].length() == 0){
                arrLine[i] = "null";
            }
            result += arrLine[i] + ","; 
        }
        if (arrLine[arrLine.size() - 1].length() == 0){
                arrLine[arrLine.size() - 1] = "null";
            }
        result += arrLine[arrLine.size() - 1] + "),\n";
    }
    result.replace(result.length() - 2, 1, ";");
    result += "\n";
    return result;
}

// for string delimiter
std::vector<std::string> split(std::string s, std::string delimiter) {
    size_t pos_start = 0, pos_end, delim_len = delimiter.length();
    std::string token;
    std::vector<std::string> res;

    while ((pos_end = s.find(delimiter, pos_start)) != std::string::npos) {
        token = s.substr (pos_start, pos_end - pos_start);
        pos_start = pos_end + delim_len;
        res.push_back (token);
    }

    res.push_back (s.substr (pos_start));
    return res;
}