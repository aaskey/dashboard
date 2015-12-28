// Copyright 2015 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import UpdateReplicasDialogController from 'replicasetdetail/updatereplicas_controller';

/**
 * Opens update replicas dialog.
 * @param {!md.$dialog} mdDialog
 * @param {!backendApi.ReplicaSetDetail} replicaSetDetail
 * @param {!function(number, function(!backendApi.ReplicaSetSpec)=,
 * function(!angular.$http.Response)=)} updateReplicasFn
 * @return {!angular.$q.Promise}
 */
export default function showUpdateReplicasDialog(mdDialog, replicaSetDetail, updateReplicasFn) {
  return mdDialog.show({
    controller: UpdateReplicasDialogController,
    controllerAs: 'ctrl',
    clickOutsideToClose: true,
    templateUrl: 'replicasetdetail/updatereplicas.html',
    locals: {
      'updateReplicasFn': updateReplicasFn,
      'replicaSetDetail': replicaSetDetail,
    },
  });
}